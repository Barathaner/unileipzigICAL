import React, {useState} from 'react';
import './AccordionItem.css'
import Events from "./Events";
import 'material-icons';

const AccordionItem = ({deleteMods, modul}) => {

    const [isActive, setIsActive] = useState(false);

    function handledeletemods(id) {
        deleteMods(id)
    }

    return (
        <div className='eventContainer' key={modul.id}>
            <div className="event">
                <a className='eventTitleContainer' data-bs-toggle="collapse" href={"#module" + modul.id}>
                    <span className='material-icons me-2'>expand_more</span>
                    <div className="eventTitle">{modul.name}</div>
                </a>
                <div className="eventButtons">
                    <button type="button" onClick={e => handledeletemods(modul.id)}
                            className="btn btn-danger">
                        <span className='material-icons'>delete</span>
                    </button>
                </div>
            </div>

            <div className='collapse eventDetailsContainer' id={"module" + modul.id}>
                {modul.events.map((event, index) => {
                    return <div className='eventDetails'>
                                <Events key={index} typ={event.evname} start={event.start} end={event.stop}
                                weekday={event.weekday} location={event.location} teacher={event.teacher}/>
                            </div>
                    }
                )}
            </div>
        </div>
    )
};
export default AccordionItem;