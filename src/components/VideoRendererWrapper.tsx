import { useState, FC, Suspense, useEffect} from 'react'
import '../App.css'

import { QueryOptions } from '../types/queryParams.d'
import SearchBar from './SearchBar'
import VideoRenderer from '../components/VideoRenderer'
import Header from '../components/Header'
import { useParams, useSearchParams } from 'react-router-dom'


const VideoRendererWrapper:FC = () => {

    const { handleUrl } = useParams();
    const[currentSubmittedUserHandle, setCurrentSubmittedUserHandle] = useState("");
    const[queryParams, setQueryParams] = useState<QueryOptions>({"sort": -1, "title": "", "dateBefore": new Date().toISOString().split("T")[0]})
    const[searching, setSearching] = useState(false)

  return (
    <div id="main">
        <Header></Header>
        <SearchBar handleUrl={handleUrl} searching={searching} setCurrentSubmittedUserHandle={setCurrentSubmittedUserHandle} setQueryParams={setQueryParams} setSearching={setSearching}></SearchBar>
        <Suspense fallback={<h1> Loading... </h1>}>
        {searching && <VideoRenderer queryParams={queryParams} handle={currentSubmittedUserHandle} ></VideoRenderer>}
        </Suspense>
      </div>
  )
}

export default VideoRendererWrapper