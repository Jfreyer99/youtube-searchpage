import { useState, FC} from 'react'
import './App.css'

import SearchBar from './Search'
import VideoRenderer from './VideoRenderer'
import GoogleLogin from './GoogleLogin'

const App:FC = () => {

  const[videos, setVideos] = useState(Array<Object>)
  const[user, setUser] = useState({})

  return (
    <div id="main">
      <div id="info">
          <div>invisible</div>
          <div id="title"><h1 >Advanced Youtube Search</h1></div>
          <div><GoogleLogin setUser={setUser} user={user}> </GoogleLogin></div>
      </div>
        <SearchBar setVideos={setVideos}></SearchBar>
        <VideoRenderer videos={videos}></VideoRenderer>
      </div>
  )
}

export default App