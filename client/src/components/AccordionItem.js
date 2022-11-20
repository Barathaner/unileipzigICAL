import React, {useState} from 'react';
import './AccordionItem.css'
import Events from "./Events";

const AccordionItem = ({deleteMods, modul}) => {

    const [isActive, setIsActive] = useState(false);

    function handledeletemods(id) {
        deleteMods(id)
    }
    return<div key={modul.id}>
            <div className="eventitem d-sm-flex ">
                    <div className=" eventtitle row">{modul.name}</div>

                <div className="eventbuttons row">
                    {isActive ?
                            <button onClick={() => setIsActive(!isActive)} type="button" className="btn btn-secondary">Less</button> :
                            <button onClick={() => setIsActive(!isActive)} type="button" className="btn btn-success">More</button>}

                        <button type="button" onClick={e => handledeletemods(modul.id)}
                                className="btn btn-danger">Delete
                        </button>
                </div>
            </div>

                {isActive && <div>
                    {modul.events.map((event, index) => {
                            return <Events key={index} typ={event.evname} start={event.start} end={event.stop}
                                           weekday={event.weekday} location={event.location} teacher={event.teacher}/>
                        }
                    )}
                </div>}

        </div>
};
export default AccordionItem;