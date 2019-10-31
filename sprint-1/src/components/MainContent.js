import React from 'react'
import HeroVideo from './mainContent/HeroVideo';
import VideoInfo from './mainContent/VideoInfo';
import Comments from './mainContent/Comments';
import NextVideos from './mainContent/NextVideos';


export default function MainContent({ next, current }) {
    console.log(next);
    console.log(current);
    return (
        <main>
            <HeroVideo current={current} />
            <div className="main-content">
                <div className="main-content__video-specific">
                    <VideoInfo current={current} />
                    <Comments current={current} />
                </div>
                <NextVideos next={next} />
            </div>
        </main>
    )
}
