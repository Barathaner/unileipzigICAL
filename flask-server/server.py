from flask import Flask
from bs4 import BeautifulSoup
import requests
from icalendar import Calendar, Event, vCalAddress, vText
import pytz
from datetime import datetime
import os
import json
from pathlib import Path
from datetime import timedelta, date
app = Flask(__name__)




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
def removelines(value):
    return value.replace('\n','')

def parseweekday(weekday):
    try:
        a = weekdaydict[weekday]
        return a
    except:
        print("no matching keys")
        return None


class UniEvent:
  def __init__(self, name,start,stop,weekday,location,teacher):
    self.name = name
    self.start = start
    self.stop = stop
    self.weekday = weekday
    self.location = location
    self.teacher = teacher



class Module:
  def __init__(self, id,name,events):
    self.id = id
    self.name = name
    self.events = events


def daterange(date1, date2):
    for n in range(int ((date2 - date1).days)+1):
        yield date1 + timedelta(n)


#Members API Route
@app.route("/members")
def members():
    url = f'https://www.informatik.uni-leipzig.de/ifijung/10/service/stundenplaene/{semester1}/modul.html'
    moduleList = scrapeForTimeTable(url)
    moduleNames = []
    for m in moduleList:
        moduleNames.append(m.name)
    return{"members": moduleNames}


def scrapeForTimeTable(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content,'html.parser')
    stundenplan = soup.find('div', attrs={'id':'stundenplan'})
    rows = stundenplan.find_all('div', attrs={'class':'MODUL'})
    moduleList=[]
    for module in rows:
        name = module.find('div', attrs={'class':'n-modul-title'}).text
        id = module.find('div', attrs={'class':'n-modul-id'}).text
        events = module.find_all('div', attrs={'class':'s-termin-entry'})
        newevents=[]
        for ev in events:
            evname, evstart, evstop, evweekday, evlocation, evteacher = " "*6
            if ev.find('div',attrs={'class':'s_termin_typ'}) is None:
                print("No eventname")
            else:
                evname = ev.find('div',attrs={'class':'s_termin_typ'}).text
            if ev.find('div',attrs={'class':'s_termin_von'}) is None:
                print("No start")
            else:
                evstart = ev.find('div',attrs={'class':'s_termin_von'}).text
            if ev.find('div',attrs={'class':'s_termin_bis'}) is None:
                print("No stop")
            else:
                evstop = ev.find('div',attrs={'class':'s_termin_bis'}).text
            if ev.find('div',attrs={'class':'s_termin_zeit'}) is None or len(ev.find('div',attrs={'class':'s_termin_zeit'}).text) < 5:
                print("No day")
            else:
                evweekday = ev.find('div',attrs={'class':'s_termin_zeit'}).text
            if ev.find('div',attrs={'class':'s_termin_raum"'}) is None:
                print("No room")
            else:
                evlocation = ev.find('div',attrs={'class':'s_termin_raum"'}).text
            if ev.find('div',attrs={'class':'s_termin_dozent'}) is None:
                print("No teacher")
            else:
                evteacher = ev.find('div',attrs={'class':'s_termin_dozent'}).text
            newevents.append(UniEvent(evname.strip(),evstart,evstop,parseweekday(evweekday.strip()),evlocation.strip(), removelines(evteacher.strip())))

        moduleList.append(Module(id,name,newevents))

    return moduleList

def convertevToJson(ev):
    evJson= {
    'evname' : ev.name,
    'start' : ev.start,
    'stop' : ev.stop,
     'weekday' : ev.weekday ,
     'location' : ev.location,
      'teacher' : ev.teacher
    }
    return evJson


def writeModuleListToJSON(moduleLi):
    modJson=[]
    for mod in moduleLi:
        jsonEvList = []
        for ev in mod.events:
            jsonEvList.append(convertevToJson(ev))
        modDict = {
        "id" : mod.id,
        "name" : mod.name,
        "events" : jsonEvList
        }
        modJson.append(modDict)
        jsonString = json.dumps(modJson)
        jsonFile = open("data.json", "w")
        jsonFile.write(jsonString)
        jsonFile.close()


def createICAL(modules,directory):


    cal = Calendar()
    start = date(2022, 10, 10)
    end = date(2023, 2, 4)
    for mod in modules:
        for ev in mod.events:
            for dt in daterange(start, end):
                if dt.weekday() in [ev.weekday]:  # to print only the weekdates
                    event = Event()
                    event.add('summary', mod.id + " " +mod.name + " " +ev.name + " bei " + ev.teacher)
                    event.add('dtstart', datetime(dt.year, dt.month, dt.day, int(ev.start.split(':')[0]),int(ev.start.split(':')[1]), 0, tzinfo=pytz.utc))
                    event.add('dtend', datetime(dt.year, dt.month, dt.day, int(ev.stop.split(':')[0]),int(ev.stop.split(':')[1]), 0, tzinfo=pytz.utc))
                    event.add('dtstamp', datetime(dt.year, dt.month, dt.day, int(ev.stop.split(':')[0]),int(ev.stop.split(':')[1]), 0, tzinfo=pytz.utc))

                    # Adding Organizer
                    organizer = vCalAddress('MAILTO:karl-jahnel@web.de')
                    organizer.params['cn'] = vText('Organizer')
                    organizer.params['role'] = vText('CHAIR')
                    event['organizer'] = organizer

                    # Adding attendee
                    attendee = vCalAddress('MAILTO:')
                    attendee.params['cn'] = vText(ev.teacher)
                    attendee.params['ROLE'] = vText('REQ-PARTICIPANT')
                    event.add('attendee', attendee, encode=0)


                    # Adding location
                    event['location'] = ev.location

                    # Adding events to calendar
                    cal.add_component(event)

    # print(directory)
    f = open(os.path.join(directory, 'example.ics'), 'wb')
    f.write(cal.to_ical())
    f.close()


if __name__ == '__main__':
    url = f'https://www.informatik.uni-leipzig.de/ifijung/10/service/stundenplaene/{semester1}/modul.html'
    moduleList = scrapeForTimeTable(url)
    writeModuleListToJSON(moduleList)
    app.run(debug=True)
#         while q:
#         print("select your modules by ID or enter q for creating calendar")
#
#         modID=input()
#         if modID=="q":
#             q = False
#             continue
#         else:
#             for mods in moduleList:
#                 if modID == mods.id:
#                     savedList.append(mods)



