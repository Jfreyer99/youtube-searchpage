import { useState, FC, Suspense} from 'react'
import './App.css'

import { QueryOptions } from './typedef/typedef'

import SearchBar from './Search'
import VideoRenderer from './VideoRenderer'
import GoogleLogin from './GoogleLogin'

const e : QueryOptions = {
  sort: 0
}

const App:FC = () => {

  const[user, setUser] = useState({})
  const[currentSubmittedUserHandle, setCurrentSubmittedUserHandle] = useState("");
  const[queryParams, setQueryParams] = useState<QueryOptions>(e)
  const[searching, setSearching] = useState(false)

  return (
    <div id="main">
      {/* <div id="info">
          <div>invisible</div>
          <div id="title"><h1 >Advanced Youtube Search</h1></div>
          <div><GoogleLogin setUser={setUser} user={user}> </GoogleLogin></div>
      </div> */}
        <SearchBar searching={searching} setCurrentSubmittedUserHandle={setCurrentSubmittedUserHandle} setQueryParams={setQueryParams} setSearching={setSearching}></SearchBar>

        <Suspense fallback={<h1> Loading... </h1>}>
        {searching && <VideoRenderer queryParams={queryParams} handle={currentSubmittedUserHandle} ></VideoRenderer>}
        </Suspense>
      </div>
  )
}

export default App