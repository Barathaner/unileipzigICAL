import React, {useState} from 'react';
import './AccordionItem.css'
import Events from "./Events";

const AccordionItem = ({deleteMods, modul}) => {

    const [isActive, setIsActive] = useState(false);

    function handledeletemods(id) {
        deleteMods(id)
    }
    return<div key={modul.id}>
            <div className="accordion-item">
                <div className="accordion-title">
                    <div>{modul.name}</div>
                    <div className="d-flex">

                        <div onClick={() => setIsActive(!isActive)}>{isActive ?
                            <button type="button" className="btn btn-secondary">Less</button> :
                            <button type="button" className="btn btn-success">More</button>}</div>

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

        </div>
};
export default AccordionItem;