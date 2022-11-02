import React, {useState, useEffect} from 'react'
import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordion from './components/Accordion';
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



        function postdata(nameslol){

            fetch('/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nameslol)
            })
                .then((response) => {
                    console.log("response", response)
                    return response.json()
                })
                .then((data) => setChosen(data))
                .catch(err => {
                    console.log("err" , err);
                });
        }

    function handleaddMods(evt) {
        console.log("evt", [...names, evt])
        setNames([...names, evt]);
        postdata([...names, evt])
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
                        {chosen !== undefined ? chosen.map((mods,index) => {
                            return <Accordion key={mods.id} title={mods.name} events={mods.events}/>
                        }) : null}
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