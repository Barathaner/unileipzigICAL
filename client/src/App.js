import React, {useState, useEffect} from 'react'
import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordion from './components/Accordion';
import moduleList from "./data.json";
function App() {

    const [data, setData] = useState([{}])
    const [names, setNames] = useState([]);
    useEffect(() =>{
        fetch("/members").then(
            res => res.json()
        ).then(
            data =>{
                setData(data)
                console.log(data)
            }
        )
        },[])

    function handleaddMods(evt) {
        setNames(current => [...current, evt]);
    }

    return (
        <div className="App">
            <h2 className="welcomeText">Such deine Module zusammen!</h2>
            <SearchBar  addMods={handleaddMods} placeholder="Enter a Subject Name..." data={moduleList} />
            <div className="accordion">
                {moduleList.map((mods,index) => {
                    return <Accordion title={mods.name} events={mods.events}/>
                })}
            </div>
        </div>
    );
/*        <div>
            {(typeof data.members === 'undefined')? (
                <p>Loading...</p>
            ):(
                data.members.map((member,i) => (
                    <p key={i}>{member} </p>
                ))
            )}
        </div>*/
}

export default App