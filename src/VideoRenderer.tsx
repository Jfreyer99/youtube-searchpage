import { FC, lazy, useState, useCallback, useRef } from 'react'
import usePosts from './hooks/usePosts';

//import {uuid} from    'uuidv4'

const Video = lazy(() => import("./Video"));

interface AppProps{
    videos: Array<Object>,
}

//TODO uuid-v4 for key

const VideoRenderer:FC<AppProps> = (props) => {
    const [pageNum, setPageNum] = useState(0);

    //Invoke hook on button click in search component (useEffect), usePosts empty  add handle to videoRenderer props interface
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    } = usePosts(pageNum, "@PaulDavids")
    
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