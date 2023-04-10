import { useState, FC, Suspense, useEffect} from 'react'
import '../App.css'

import { QueryOptions } from '../types/typedef'

import SearchBar from './SearchBar'
import VideoRenderer from '../components/VideoRenderer'
import { useNavigate, useParams } from 'react-router-dom'

const e : QueryOptions = {
  sort: 0
}

const VideoRendererWrapper:FC = () => {

    const { handleUrl } = useParams();
    const[currentSubmittedUserHandle, setCurrentSubmittedUserHandle] = useState("");
    const[queryParams, setQueryParams] = useState<QueryOptions>(e)
    const[searching, setSearching] = useState(false)

  return (
    <div id="main">
        <h1>Advanced Youtube Search</h1>
        <SearchBar handleUrl={handleUrl} searching={searching} setCurrentSubmittedUserHandle={setCurrentSubmittedUserHandle} setQueryParams={setQueryParams} setSearching={setSearching}></SearchBar>
        <Suspense fallback={<h1> Loading... </h1>}>
        {searching && <VideoRenderer queryParams={queryParams} handle={currentSubmittedUserHandle} ></VideoRenderer>}
        </Suspense>
      </div>
  )
}

export default VideoRendererWrapper