import { useState, FC } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

interface AppProps{
    setVideos : React.Dispatch<React.SetStateAction<Object[]>>,
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

    const buttonClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // Set State to invoke usePosts()
    }

    return(
    <div id="searchWrapper">

        <div id="search">
            <input type="text" onChange={(e) => setHandle(e.target.value)} placeholder="@handle"></input>
            <button onClick={(e) => buttonClick(e)}>Search</button>
        </div>

        <AiOutlineArrowUp onClick={(e) => toggleOptions(e)} id={optionsVisible ? "searchArrow" : "searchArrow2"}></AiOutlineArrowUp>

        { optionsVisible && (<div id="searchOptions">
            <div id="buttonList">
            <button onClick={(e) => buttonClick(e)}>Älteste</button>
            <button onClick={(e) => buttonClick(e)}>Beliebteste</button>
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
    )
}

export default SearchBar