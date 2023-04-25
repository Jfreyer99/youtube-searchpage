import { FC, lazy, useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import usePosts from '../hooks/usePosts';

import { QueryOptions } from '../types/queryParams.d'

const Video = lazy(() => import("./Video"));

interface AppProps{
    handle : string,
    queryParams: QueryOptions,
}

const VideoRenderer:FC<AppProps> = (props) => {
    const [pageNum, setPageNum] = useState(0);

    useEffect(() => {
        setResults([])
        setPageNum(0)
    }, [props.handle, props.queryParams])

    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage,
        setResults
    } = usePosts(pageNum, props.handle, props.queryParams)

    const intObserver = useRef<IntersectionObserver>();

    const lastPostRef = useCallback((video: HTMLDivElement) => {
        if(isLoading) return;

        if(intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(videos => {
            if(videos[0].isIntersecting && hasNextPage){
                setPageNum((prev) => prev+1);
            }
        });

        if(video){
            intObserver.current.observe(video);
        }
    }, [isLoading, hasNextPage]);

    if(isError) return <p>Error: {error.message}</p>

    const content = results.map((video, i) => {
        if(results.length === i+1){
            const temp = JSON.parse(JSON.stringify(video));

            return <Video ref={lastPostRef} key={temp.videoURL} title={temp.title} uploadDate={temp.uploadDate} viewCount={temp.viewCount} videoURL={temp.videoURL} thumbnailURL={temp.thumbnailURL}></Video>
        }
        const temp = JSON.parse(JSON.stringify(video));
        return <Video key={temp.videoURL} title={temp.title} uploadDate={temp.uploadDate} viewCount={temp.viewCount} videoURL={temp.videoURL} thumbnailURL={temp.thumbnailURL}></Video>
    })

    return(
        <div id="videoRenderer">
            {content}
        </div>
    )
}

export default VideoRenderer;