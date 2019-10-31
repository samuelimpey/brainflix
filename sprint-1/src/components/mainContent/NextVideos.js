import React from 'react'

export default function NextVideos({ next }) {
    const nextVideo = next && next.map(function (next) {
        return (
            <div className="next-videos__video">
                <img className="next-videos__video--image" src={next.image} alt="picture stuffs" />
                <h4 className="next-videos__video--title">{next.title}</h4>
                <h5 className="next-videos__video--channel">{next.channel}</h5>
            </div>
        )
    })
    return (
        <div className="next-videos">
            {nextVideo}
        </div>
    )
}
