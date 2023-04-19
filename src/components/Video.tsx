import {BsDot} from 'react-icons/bs'
import React, { Suspense } from 'react';

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
            <img loading="lazy" className="videoThumbnail animateVideo" src={props.thumbnailURL ? props.thumbnailURL : 
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w8ErQFq8xOFc_yw1YSIwbwHaHa%26pid%3DApi&f=1&ipt=dea8c0ae522948021089de7fdcf590bffd9bb2bdca3f87a72ed2e5d21e3ec828&ipo=images"}></img>
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
        <div className="p-10">
        {content}
        </div>
    );
});

export default Video;