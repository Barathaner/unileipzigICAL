import React, {useState, useEffect} from 'react'
import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordion from './components/Accordion';
import moduleList from "./data.json";
function App() {

    const [data, setData] = useState([{}])
    const [names, setNames] = useState([]);
    const [chosen, setChosen] = useState([]);



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



        function postdata(){

            fetch('http://localhost:3000/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(names)
            })
                .then((response) => response.json())
                .then((data) => setChosen(data));
        }
    function handleaddMods(evt) {
        setNames(current => [...current, evt]);
        postdata()
    }

    return (
        <div className="App">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <SearchBar  addMods={handleaddMods} placeholder="Enter a Subject Name..." data={moduleList} /></div>
                <div className="col-4"></div>
            </div>
            <div className="accordion">
                {chosen.map((mods,index) => {
                    return <Accordion title={mods.name} events={mods.events}/>
                })}
            </div>
            <button>Get ICS</button>
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