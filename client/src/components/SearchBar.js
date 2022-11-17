import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ addMods,placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            console.log(value.name)
            return  Object.keys(value.name).length > 0 ? value.name.toLowerCase().includes(searchWord.toLowerCase()) : "";
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


        const update = (wordEntered) => {
        const newFilter = data.filter((value) => {
            console.log(value.name)
            return  Object.keys(value.name).length > 0 ? value.name.toLowerCase().includes(wordEntered.toLowerCase()) : "";
        });

        if (wordEntered === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    function handleaddmods(name){
        update(wordEntered)
        const newfiltereddata = filteredData.filter(namemod => namemod.name !== name)
        setFilteredData(newfiltereddata)
        addMods(name)
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs row ">
                <input className="col-10 border-0 shadow-none"
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon d-flex col-2 border-0 justify-content-center">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>

                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                                <div key={value.id} className="dataItem text-decoration-none overflow-hidden"  target="_blank">
                                    <p className="text-decoration-none overflow-hidden" onClick={e => handleaddmods(value.name)}>{value.name} </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;