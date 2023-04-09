import { useState, FC, useRef } from 'react'
import React from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

import { QueryOptions } from './typedef/typedef'

interface AppProps{
    setCurrentSubmittedUserHandle: React.Dispatch<React.SetStateAction<string>>,
    setSearching?: React.Dispatch<React.SetStateAction<boolean>>,
    setQueryParams: React.Dispatch<React.SetStateAction<QueryOptions>>,
    searching: boolean
}

const SearchBar:FC<AppProps> = (props) => {

    const[optionsVisible, setOptionsVisible] = useState(false);
    const[handle, setHandle] = useState("")
    const[before, setBefore] = useState(new Date().toISOString().split("T")[0]);
    const[title, setTitle] = useState("")

    const toggleOptions = (e : React.MouseEvent<SVGElement, MouseEvent>) => {
        setOptionsVisible((prevState) => !prevState);
    }

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name : string = e.currentTarget.name;
        props.setCurrentSubmittedUserHandle(handle)

        switch(name){
            case "old": props.setQueryParams({"sort": 1, "title": title, "dateBefore": before});
                break;
            case "new": props.setQueryParams({"sort": -1, "title": title, "dateBefore": before});
                break;
            case "fav": props.setQueryParams({"sort": NaN, "title": title, "dateBefore": before});
                break;
        }

        if(props.setSearching){
            props.setSearching(true);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        if(e.currentTarget.value === ""){
            setBefore(new Date().toISOString().split("T")[0]);
        }
        else{
            setBefore(e.target.value);
        }
    }

    return(
    <form name="submit" onSubmit={handleSearch}>
    <div id="searchWrapper">
        <div id="search">
            <input type="text" onChange={(e) => setHandle(e.target.value)} placeholder="@handle"></input>
            <button name ="new" onClick={handleSearch}>Search</button>
    </div>

        <AiOutlineArrowUp onClick={toggleOptions} id={optionsVisible ? "searchArrow" : "searchArrow2"}></AiOutlineArrowUp>

        { optionsVisible && (<div id="searchOptions">
            <div id="buttonList">
            <button name="old" onClick={handleSearch}>Älteste</button>
            <button name="fav" onClick={handleSearch}>Beliebteste</button>
            </div>
            <div id="datePickerContainer">

                <label className="datePickerLabel" htmlFor="from">Uploaded Before:</label>
                <input value={before} onChange={handleChange} className="datePicker" id="from" type="date" max={new Date().toISOString().split("T")[0]} min="2005-04-01"></input>

            </div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="titleSearch" type="text" placeholder='Input title to search for'></input>
        </div>)}
        </div>
    </form>
    )
}

export default SearchBar