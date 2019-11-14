import React from 'react'
// import video from '../../assets/images/video-list-0.jpg'
// import playBtn from '../../assets/icons/SVG/Icon-play.svg'
// import scrubber from '../../assets/icons/SVG/Icon-scrubber-control.svg'
// import full from '../../assets/icons/SVG/Icon-fullscreen.svg'
// import volume from '../../assets/icons/SVG/Icon-volume.svg'
// import video from '../../assets/video/BrainStation Sample Video.mp4'


export default function HeroVideo({ current }) {
    console.log(current)
    return (

        <div className="video-player">
            <video className="video-player__video" poster={current.image} controls>

            </video >
            {/* <div className="video-player__controlls">
                <img className="video-player__controlls--play" src={playBtn} alt="play dis" />
                <img className="video-player__controlls--scrub" src={scrubber} alt="move video thingy" />
                <div>
                    <img className="video-player__controlls--full" src={full} alt="make it big" />
                    <img className="video-player__controlls--loud" src={volume} alt="get loud" />
                </div>
            </div> */}
        </div>
    )
}
