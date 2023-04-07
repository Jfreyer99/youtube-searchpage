import { useState, FC, useRef } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

import { QueryOptions } from './typedef/typedef'

interface AppProps{
    setCurrentSubmittedUserHandle: React.Dispatch<React.SetStateAction<string>>,
    setSearching?: React.Dispatch<React.SetStateAction<boolean>>,
    setQueryParams: React.Dispatch<React.SetStateAction<QueryOptions>>,
}

const SearchBar:FC<AppProps> = (props) => {

    const[optionsVisible, setOptionsVisible] = useState(false);
    const[handle, setHandle] = useState("")
    const[dateFrom, setDateFrom] = useState("");
    const[dateTo, setDateTo] = useState("");
    const[title, setTitle] = useState("")

    const toggleOptions = (e : React.MouseEvent<SVGElement, MouseEvent>) => {
        setOptionsVisible((prevState) => !prevState);
    }

    const buttonClickNew = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.setCurrentSubmittedUserHandle(handle)
        props.setQueryParams({"sort": -1});

        if(props.setSearching){
        props.setSearching(true);
        }
    }

    const buttonClickOld = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.setCurrentSubmittedUserHandle(handle)
        props.setQueryParams({"sort": 1});
        if(props.setSearching){
        props.setSearching(true);
        }
    }

    const buttonClickFav = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.setCurrentSubmittedUserHandle(handle)
        props.setQueryParams({"sort": -1});
        if(props.setSearching){
        props.setSearching(true);
        }
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        props.setCurrentSubmittedUserHandle(handle)
        props.setQueryParams({"sort": -1});
        if(props.setSearching){
        props.setSearching(true);
        }
    }

    return(
    <form onSubmit={handleSubmit}>
    <div id="searchWrapper">
        <div id="search">
            <input type="text" onChange={(e) => setHandle(e.target.value)} placeholder="@handle"></input>
            <button onClick={buttonClickNew}>Search</button>
        </div>

        <AiOutlineArrowUp onClick={toggleOptions} id={optionsVisible ? "searchArrow" : "searchArrow2"}></AiOutlineArrowUp>

        { optionsVisible && (<div id="searchOptions">
            <div id="buttonList">
            <button onClick={buttonClickOld}>Älteste</button>
            <button onClick={buttonClickFav}>Beliebteste</button>
            </div>
            <div id="datePickerContainer">
                <label className="datePickerLabel" htmlFor="from">From:</label>
                <input value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="datePicker" id="from" type="date" ></input>
                <label className="datePickerLabel" htmlFor="to">To:</label>
                <input value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="datePicker" id="to" type="date" ></input>
            </div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="titleSearch" type="text" placeholder='Input title to search for'></input>
        </div>)}
        </div>
    </form>
    )
}

export default SearchBar