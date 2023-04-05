import { useState, FC} from 'react'
import './App.css'

import SearchBar from './Search'
import VideoRenderer from './VideoRenderer'
import GoogleLogin from './GoogleLogin'

const App:FC = () => {

  const[user, setUser] = useState({})
  const[currentSubmittedUserHandle, setCurrentSubmittedUserHandle] = useState("");
  const[searching, setSearching] = useState(false)

  const getChannelHandle = (handle : string) => {
    setCurrentSubmittedUserHandle(handle);
  }

  return (
    <div id="main">
      <div id="info">
          <div>invisible</div>
          <div id="title"><h1 >Advanced Youtube Search</h1></div>
          <div><GoogleLogin setUser={setUser} user={user}> </GoogleLogin></div>
      </div>
        <SearchBar getHandle={getChannelHandle} setSearching={setSearching}></SearchBar>
         {/** Render Video Renderer when search button is clicked pass handle to component */}
        {searching && <VideoRenderer handle={currentSubmittedUserHandle} ></VideoRenderer>}
      </div>
  )
}

export default App