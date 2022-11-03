import './Events.css'
const Accordion = ({typ,start,end,weekday,location,teacher }) => {

    return (
        <div className="event-container">
            <div className="event">{typ}</div>
            <div className="event">{start} - {end}</div>
            <div className="event">{weekday}</div>
            <div className="event">{location}</div>
            <div className="event">{teacher}</div>
        </div>
    );
};

export default Accordion;