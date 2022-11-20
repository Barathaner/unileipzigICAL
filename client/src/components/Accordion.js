import './Accordion.css'
import AccordionItem from "./AccordionItem";

const Accordion = ({deleteMods, chosen}) => {


    return (<div className="accordion">{

        chosen.map(modul => {
        return <AccordionItem deleteMods={deleteMods} modul={modul}></AccordionItem>
    })
    }

    </div>)
};
export default Accordion;