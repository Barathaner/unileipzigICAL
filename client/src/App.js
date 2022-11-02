import React, {useState, useEffect} from 'react'
import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordion from './components/Accordion';

function App() {

    const [data, setData] = useState([{}])
    const [names, setNames] = useState([]);
    const [chosen, setChosen] = useState([]);


    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data.members)
            }
        )
    }, [])


    function postdata(nameslol) {

        fetch('/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nameslol)
        })
            .then((response) => {
                console.log("response", response)
                return response.json()
            })
            .then((data) => setChosen(data))
            .catch(err => {
                console.log("err", err);
            });
    }

    function handleaddMods(evt) {
        console.log("evt", [...names, evt])
        setNames([...names, evt]);
        postdata([...names, evt])
    }





    function handleClickCAL(){
            fetch('/ics', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/ics',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `cal.ics`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
    }
    return (
        <div className="App">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <SearchBar addMods={handleaddMods} placeholder="Enter a Subject Name..." data={data}/></div>


                <div className="col-2"></div>
            </div>

            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 d-flex justify-content-center">
                    <button type="button" onClick={handleClickCAL} className="btn btn-success">GET ICAL</button>
                </div>


                <div className="col-2"></div>

            </div>

            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="accordion">
                        {chosen !== undefined ? chosen.map((mods, index) => {
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