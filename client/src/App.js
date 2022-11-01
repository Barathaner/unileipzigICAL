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
                setData(data.members)
            }
        )
        },[])



        function postdata(){

            fetch('/add', {
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
                <div className="col-2"></div>
                <div className="col-8">
                    <SearchBar  addMods={handleaddMods} placeholder="Enter a Subject Name..." data={data} /></div>


                <div className="col-2"></div>
            </div>

            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 d-flex justify-content-center">
                    <button type="button" className="btn btn-success">GET ICAL</button></div>


                <div className="col-2"></div>

            </div>

            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="accordion">
                        {chosen.map((mods,index) => {
                            return <Accordion title={mods.name} events={mods.events}/>
                        })}
                    </div>
                </div>

                <div className="col-2"></div>
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