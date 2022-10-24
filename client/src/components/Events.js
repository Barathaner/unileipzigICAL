import './Events.css'
const Accordion = ({typ,start,end,weekday,location,teacher }) => {

    return (
        <div className="event-container">
            <div className="col-3">{typ}</div>
            <div className="col-2">{start} - {end}</div>
            <div className="col-2">{weekday}</div>
            <div className="col-3">{location}</div>
            <div className="col-2">{teacher}</div>
        </div>
    );
};

export default Accordion;