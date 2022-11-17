import './Accordion.css'
import AccordionItem from "./AccordionItem";

const Accordion = ({deleteMods, chosen}) => {


    return (chosen.map(modul => {
        return <AccordionItem deleteMods={deleteMods} modul={modul}></AccordionItem>
    }))
};
export default Accordion;