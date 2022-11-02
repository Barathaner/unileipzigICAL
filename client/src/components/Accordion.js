import React, {useState} from 'react';
import './Accordion.css'
import Events from "./Events";

const Accordion = ({title, events}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div>
                {events.map((event,index) => {
                        return <Events key = {index} typ={event.evname} start={event.start} end={event.stop} weekday={event.weekday} location={event.location} teacher={event.teacher}/>
                }

                )}
            </div>}
        </div>
    );
};
export default Accordion;