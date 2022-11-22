from flask import (Flask, send_file, request, jsonify,make_response)
from flask import send_from_directory
from flask_cors import CORS
from flask_cors import cross_origin
from flask_sqlalchemy import SQLAlchemy
from bs4 import BeautifulSoup
import re
import requests
from icalendar import Calendar, Event, vText
import pytz
import json
import os
from datetime import timedelta, datetime
from flask_crontab import Crontab
from sqlalchemy_utils.functions import database_exists, create_database, drop_database
import time

import string
import random
N = 7

time.sleep(10)

app = Flask(__name__, static_folder='../build', static_url_path='')
app.config["SECRET_KEY"] = "pogchampsecret"
app.config[
    'SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:{os.environ['POSTGRES_PASSWORD']}@postgres:5432/{os.environ['POSTGRES_DB']}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
cors = CORS(app)
crontab = Crontab(app)
semester1 = 'ws2022'
semester2 = 'ss2022'

weekdaydict = {
    "montags": 0,
    "dienstags": 1,
    "mittwochs": 2,
    "donnerstags": 3,
    "freitags": 4,
    "samstags": 5,
    "sonntags": 6
}


class Modul(db.Model):
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    modulevents = db.relationship('ModulEvent', backref='modul')

    def __repr__(self):
        return f"Modul: {self.name}"

    def __init__(self, id, name):
        self.id = id
        self.name = name


class Holiday(db.Model):
    name = db.Column(db.String, primary_key=True)
    start = db.Column(db.DateTime, nullable=False)
    end = db.Column(db.DateTime, nullable=False)
    desc = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"Holiday: {self.name}"

    def __init__(self, name, start, end, desc):
        self.name = name
        self.start = start
        self.end = end
        self.desc = desc


class ModulEvent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    start = db.Column(db.String(5))
    stop = db.Column(db.String(5))
    weekday = db.Column(db.Integer)
    location = db.Column(db.String(100))
    teacher = db.Column(db.String(100))
    modul_id = db.Column(db.String, db.ForeignKey('modul.id'), nullable=False)

    def __repr__(self):
        return f"ModulEvent: {self.name}"

    def __init__(self, modul_id, name, start, stop, weekday, location, teacher):
        self.name = name
        self.start = start
        self.stop = stop
        self.weekday = weekday
        self.location = location
        self.teacher = teacher
        self.modul_id = modul_id


class UniEvent:
    def __init__(self, name, start, stop, weekday, location, teacher):
        self.name = name
        self.start = start
        self.stop = stop
        self.weekday = weekday
        self.location = location
        self.teacher = teacher


class Module:
    def __init__(self, id, name, events):
        self.id = id
        self.name = name
        self.events = events


class Holidayuni:
    def __init__(self, name, start, end, desc):
        self.name = name
        self.start = start
        self.end = end
        self.desc = desc


def fillDatabase():
    url = f'https://www.informatik.uni-leipzig.de/ifijung/10/service/stundenplaene/{semester1}/modul.html'
    url2 = f'https://www.uni-leipzig.de/studium/im-studium/akademisches-jahr'
    moduleList = scrapeForTimeTable(url)
    holidaylist = scrapeHolidays(url2)
    for module in moduleList:
        db.session.add(Modul(module.id, module.name))
        db.session.commit()
        for event in module.events:
            db.session.add(ModulEvent(module.id, event.name, event.start, event.stop, event.weekday, event.location,
                                      event.teacher))
            db.session.commit()

    for holiday in holidaylist:
        db.session.add(Holiday(holiday.name, holiday.start, holiday.end, holiday.desc))
        db.session.commit()


def scrapeHolidays(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    accordion = soup.find('div', attrs={'id': 'accordion3663'})
    rows = accordion.find('div', attrs={'class': 'panel panel-default'})
    list = rows.find('ul', attrs={'class': 'list-events'})
    liholidays = list.find_all('li')
    holidaylist = []
    for holiday in liholidays:
        attrs = holiday.find_all()
        name = attrs[0].text
        if name is None:
            print("No name for holiday")
        else:
            name = parseUmlaute(name)
        beschreibung = holiday.text
        if beschreibung is None:
            print("No desc for holiday")
        else:
            dates = beschreibung.split("–")

            if len(dates) > 1:
                start = dateextraction(dates[0])
                start = datetime.strptime(start, "%d.%m.%Y")
                end = dateextraction(dates[1])
                enddate = datetime.strptime(end, "%d.%m.%Y")
            else:
                start = dateextraction(dates[0])
                start = datetime.strptime(start, "%d.%m.%Y")
                end = dateextraction(dates[0])
                enddate = datetime.strptime(end, "%d.%m.%Y")

            desc = beschreibung.split(end)
            description = desc[1]
            if len(description) > 0:
                description = description.split(")")[1].strip()

        holidaylist.append(Holidayuni(name, start, enddate, description))

    return holidaylist


def dateextraction(input):
    match = re.search(r'(\d+.\d+.\d+)', input)
    return match.group(1)


def scrapeForTimeTable(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    stundenplan = soup.find('div', attrs={'id': 'stundenplan'})
    rows = stundenplan.find_all('div', attrs={'class': 'MODUL'})
    moduleList = []
    for module in rows:
        name = parseUmlaute(module.find('div', attrs={'class': 'n-modul-title'}).text)
        id = module.find('div', attrs={'class': 'n-modul-id'}).text
        events = module.find_all('div', attrs={'class': 's-termin-entry'})
        newevents = []
        for ev in events:
            evname, evstart, evstop, evweekday, evlocation, evteacher = " " * 6
            if ev.find('div', attrs={'class': 's_termin_typ'}) is None:
                print("No eventname")
            else:
                evname = parseUmlaute(ev.find('div', attrs={'class': 's_termin_typ'}).text)
            if ev.find('div', attrs={'class': 's_termin_von'}) is None:
                print("No start")
            else:
                evstart = ev.find('div', attrs={'class': 's_termin_von'}).text
            if ev.find('div', attrs={'class': 's_termin_bis'}) is None:
                print("No stop")
            else:
                evstop = ev.find('div', attrs={'class': 's_termin_bis'}).text
            if ev.find('div', attrs={'class': 's_termin_zeit'}) is None or len(
                    ev.find('div', attrs={'class': 's_termin_zeit'}).text) < 5:
                print("No day")
            else:
                evweekday = ev.find('div', attrs={'class': 's_termin_zeit'}).text
            if ev.find('div', attrs={'class': 's_termin_raum'}) is None:
                print("No room")
            else:
                evlocation = parseUmlaute(ev.find('div', attrs={'class': 's_termin_raum'}).text)
            if ev.find('div', attrs={'class': 's_termin_dozent'}) is None:
                print("No teacher")
            else:
                evteacher = parseUmlaute(ev.find('div', attrs={'class': 's_termin_dozent'}).text)
            newevents.append(
                UniEvent(evname.strip(), evstart, evstop, parseweekday(evweekday.strip()), evlocation.strip(),
                         removelines(evteacher.strip())))

        moduleList.append(Module(id, name, newevents))

    return moduleList


def formatevent(ev):
    evJson = {
        'evname': ev.name,
        'start': ev.start,
        'stop': ev.stop,
        'weekday': ev.weekday,
        'location': ev.location,
        'teacher': ev.teacher
    }
    return evJson


def ModuleListToJSON(moduleLi):
    modJson = []
    for mod in moduleLi:
        jsonEvList = []
        for ev in mod.events:
            jsonEvList.append(formatevent(ev))
        modDict = {
            "id": mod.id,
            "name": mod.name,
            "events": jsonEvList
        }
        modJson.append(modDict)
        jsonString = json.dumps(modJson)
    return jsonString


def formatDBModullist(moduleLi):
    modJson = []
    for mod in moduleLi:
        modDict = {
            "id": mod.id,
            "name": mod.name
        }
        modJson.append(modDict)
    return jsonify({"modullist": modJson})


def createICAL(modules):
    cal = Calendar()
    cal.add('x-wr-caldesc', 'unileipzigkarlendar')
    cal.add('x-wr-calname', 'unileipzigkarlendar')
    cal.add('x-wr-timezone', 'Europe/Berlin')
    cal.add('calscale', 'GREGORIAN')
    cal.add('prodid', '-//Karl-Augustin-Jahnel IT//unikarlender.de//DE')
    cal.add('version', '2.0')
    cal.add('method', "REQUEST")
    start = Holiday.query.filter_by(name="Lehrveranstaltungen (15 Wochen)").one().start
    end = Holiday.query.filter_by(name="Lehrveranstaltungen (15 Wochen)").one().end
    allHolidays = Holiday.query.all()
    freeholidays = Holiday.query.filter_by(desc='vorlesungsfrei').all()
    nouni = []
    for dates in freeholidays:
        for dt in daterange(dates.start, dates.end):
            nouni.append(dt)

    for holidayinfo in allHolidays:
        event1 = Event()
        event1.add('dtstamp',
                   datetime(datetime.now().year, datetime.now().month, datetime.now().day, datetime.now().hour,
                            datetime.now().minute, datetime.now().second, 0, tzinfo=pytz.timezone('Europe/Berlin')))
        event1.add('dtstart', holidayinfo.start.date())
        event1.add('dtend', holidayinfo.start.date())
        event1.add('summary', holidayinfo.name + " " + holidayinfo.desc)
        event1.add('sequence', 0)
        event1.add('description',vText(holidayinfo.name + " " + holidayinfo.desc))
        res = ''.join(random.choices(string.ascii_uppercase +
                                     string.digits, k=N))
        event1.add('uid',vText("_" + holidayinfo.name+ "_" +holidayinfo.desc +res))
        cal.add_component(event1)

        event = Event()
        event.add('dtstamp',
                  datetime(datetime.now().year, datetime.now().month, datetime.now().day, datetime.now().hour,
                           datetime.now().minute, datetime.now().second, 0, tzinfo=pytz.timezone('Europe/Berlin')))
        event.add('dtstart', holidayinfo.end.date())
        event.add('dtend', holidayinfo.end.date())
        event.add('summary', holidayinfo.name + " " + holidayinfo.desc)
        event.add('sequence',0)
        event.add('description',vText(holidayinfo.name + " " + holidayinfo.desc))
        res = ''.join(random.choices(string.ascii_uppercase +
                                     string.digits, k=N))
        event.add('uid',vText( "_" +holidayinfo.name + holidayinfo.desc)+ res)
        # Adding events to calendar
        cal.add_component(event)

    for mod in modules:
        for ev in mod['events']:
            for dt in daterange(start, end):
                if dt.weekday() in [ev["weekday"]] and dt not in nouni:  # to print only the weekdates
                    event = Event()
                    event.add('dtstamp', datetime(datetime.now().year, datetime.now().month, datetime.now().day,
                                                  datetime.now().hour, datetime.now().minute, datetime.now().second, 0,
                                                  tzinfo=pytz.timezone('Europe/Berlin')))
                    event.add('dtstart', datetime(dt.year, dt.month, dt.day, int(ev["start"].split(':')[0]),
                                                  int(ev["start"].split(':')[1]), 0,
                                                  tzinfo=pytz.timezone('Europe/Berlin')))
                    event.add('dtend', datetime(dt.year, dt.month, dt.day, int(ev["stop"].split(':')[0]),
                                                int(ev["stop"].split(':')[1]), 0,
                                                tzinfo=pytz.timezone('Europe/Berlin')))

                    event.add('summary', mod["id"] + " " + mod["name"] + " " + ev["evname"])
                    event['location'] = vText(ev["location"])
                    event.add('sequence', 0)
                    event.add('description',vText(" bei " + ev["teacher"]))
                    res = ''.join(random.choices(string.ascii_uppercase +
                                                 string.digits, k=N))
                    event.add('uid',vText(ev["location"] + "_" +mod["name"] + mod["id"]+ res))

                    # Adding events to calendar
                    cal.add_component(event)

    return cal.to_ical()


def removelines(value):
    return value.replace('\n', '')


def parseUmlaute(str):
    spcial_char_map = {ord('ä'): 'ae', ord('ü'): 'ue', ord('ö'): 'oe', ord('ß'): 'ss', ord('Ä'): 'Ae', ord('Ü'): 'Ue',
                       ord('Ö'): 'Oe'}
    return str.translate(spcial_char_map)


def parseweekday(weekday):
    try:
        a = weekdaydict[weekday]
        return a
    except:
        print("no matching keys")
        return None


def daterange(date1, date2):
    for n in range(int((date2 - date1).days) + 1):
        yield date1 + timedelta(n)


@crontab.job(day_of_week="6")
def updateDatabase():
    with app.app_context():
        if not database_exists(
                f"postgresql://postgres:{os.environ['POSTGRES_PASSWORD']}@postgres:5432/{os.environ['POSTGRES_DB']}"):
            db.create_all()
            fillDatabase()
        else:
            db.drop_all()
            db.create_all()
            fillDatabase()
        print("Updated database")


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/getall', methods=['GET'])
@cross_origin()
def getall():
    modules = Modul.query.order_by(Modul.id.asc()).all()
    return formatDBModullist(modules)


@app.route('/geteventsformod', methods=['POST'])
@cross_origin()
def geteventsformod():
    data = request.json
    events = ModulEvent.query.filter_by(modul_id=data['id']).all()
    jsonevents = []
    for event in events:
        jsonevents.append(formatevent(event))
    return jsonify({"Events": jsonevents})


@app.route('/moduleswithevents', methods=['POST'])
@cross_origin()
def moduleswithevents():
    data = request.json
    print(data)
    modswithevents = []
    for m in data['modulnameslist']:
        modu = Modul.query.filter_by(name=m).one()
        events = ModulEvent.query.filter_by(modul_id=modu.id).all()
        jsonevents = []
        for event in events:
            jsonevents.append(formatevent(event))
        modDict = {
            "id": modu.id,
            "name": modu.name,
            "events": jsonevents
        }
        modswithevents.append(modDict)
    return jsonify({"moduleswithevents": modswithevents})


@app.route("/ics", methods=['POST'])
@cross_origin()
def ics():
    data = request.json
    modswithevents = []
    for m in data['modulnameslist']:
        print(m)
        modu = Modul.query.filter_by(name=m).one()
        events = ModulEvent.query.filter_by(modul_id=modu.id).all()
        jsonevents = []
        for event in events:
            jsonevents.append(formatevent(event))
        modDict = {
            "id": modu.id,
            "name": modu.name,
            "events": jsonevents
        }
        modswithevents.append(modDict)
    ics = createICAL(modswithevents)
    response = make_response(ics)
    response.headers["Content-Disposition"] = "attachment; filename=calendar.ics"
    response.headers["Content-Type"] = "text/calendar; charset=utf-8"

    return response


updateDatabase()
