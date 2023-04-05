import {BsDot} from 'react-icons/bs'
import React from 'react';

interface VideoRendererProps{
    title : string,
    uploadDate: string,
    viewCount: string,
    videoURL: string,
    thumbnailURL: string
}

const Video = React.forwardRef<HTMLDivElement, VideoRendererProps>((props, ref) => {
    const videoBody = (
        <a className="videoURL" href={`https://youtube.com${props.videoURL}`} target="_blank">
        <div className="video">
            <img className="videoThumbnail animateVideo" src={props.thumbnailURL}></img>
            <div className="videoInfo">
                <div className="videoTitle">
                    <span className="titleText">{props.title}</span>
                </div>
                <div className="otherInfo">
                    <span className="otherText">{props.uploadDate}</span>  <BsDot className="dot"></BsDot>  <span className="otherText">{props.viewCount}</span>
                </div>
            </div>
        </div>
        </a>
    )

    const content = ref ? <div ref={ref}>{videoBody}</div> : <div>{videoBody}</div>

    return (
        <>
        {content}
        </>
    );
});

export default Video;