import React, {useState} from 'react'
import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordion from './components/Accordion';
import Footer from "./components/Footer";

function App() {

    const [data, setData] = useState(() => initAllMods())
    const [names, setNames] = useState([]);
    const [chosen, setChosen] = useState([]);


    function initAllMods() {
        fetch("/getall").then(
            res => res.json()
        ).then(
            data => {
                return setData(data.modullist);
            }
        )
    }

    function postdata(nameslol) {

        fetch('/moduleswithevents', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"modulnameslist": nameslol})
        })
            .then((response) => {
                console.log("response", response);
                return response.json();
            })
            .then((data) => {
                console.log(data.moduleswithevents)
                setChosen(data.moduleswithevents)
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    function addMods(evt) {
        const newnames = [...names, evt]
        setNames(newnames);
        postdata(newnames)
    }

    function deleteMods(id) {
        const newchosen = chosen.filter(modul => modul.id !== id)
        const nameofdeleted = data.filter(modul => modul.id === id)[0].name
        const newnames = names.filter(name => name !== nameofdeleted)
        setNames(newnames);
        setChosen(newchosen)
    }


    function handleClickCAL() {
        console.log(names)
        fetch('/ics', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"modulnameslist": names})
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob], {type: "text/calendar"}),
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
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="info p-2 mt-3">

                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" fill="currentColor"
                                className="bi bi-info-circle-fill mr" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                            </svg>

                            At the moment you can only choose subjects from the Fakultät für Informatik und Mathematik. I work steadily to improve on that. You can help!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SearchBar addMods={addMods} placeholder="Enter a Subject Name..." data={data}/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-4'>
                        <div className='row'>
                            <div className='col mt-5 d-flex justify-content-center'>
                                <button type="button" onClick={handleClickCAL} className="btn btn-success icalButton w-75 ">GET ICAL</button>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col d-flex justify-content-center">
                                <a href="https://github.com/Barathaner/unileipzigICAL" type="button" className="btn btn-dark mr">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                    <br/>
                                    Help
                                </a>
                                <a href="https://www.paypal.com/donate/?hosted_button_id=4U5342GGJL9BS" type="button" className="btn btn-primary paypalcolor ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-paypal" viewBox="0 0 16 16">
                                        <path
                                            d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"></path>
                                    </svg>
                                    <br/>
                                    Donate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <Accordion deleteMods={deleteMods} chosen={chosen}></Accordion>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );

}

export default App
