import React, {useState} from 'react';
import './AccordionItem.css'
import Events from "./Events";
import 'material-icons';

const AccordionItem = ({deleteMods, modul}) => {

    const [isActive, setIsActive] = useState(false);

    function handledeletemods(id) {
        deleteMods(id)
    }

    return<div className='eventitemContainer' key={modul.id}>
            <div className="eventitem">
                <div onClick={() => setIsActive(!isActive)} className='eventtitleContainer'>
                    <span className='material-icons me-2'>expand_more</span>
                    <div className="eventtitle">{modul.name}</div>
                </div>
                <div className="eventbuttons">
                        <button type="button" onClick={e => handledeletemods(modul.id)}
                                className="btn btn-danger">
                                    <span className='material-icons'>delete</span>
                        </button>
                </div>
            </div>

                {isActive && 
                    <div className='roundedContainer'>
                        {modul.events.map((event, index) => {
                            return <div className='eventContainer'>
                                        <Events key={index} typ={event.evname} start={event.start} end={event.stop}
                                        weekday={event.weekday} location={event.location} teacher={event.teacher}/>
                                    </div>
                            }
                        )}
                    </div>}
        </div>
};
export default AccordionItem;