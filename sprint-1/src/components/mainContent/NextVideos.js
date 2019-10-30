import React from 'react'

export default function NextVideos({ next }) {
    const nextVideo = next && next.map(function (next) {
        return (
            <div>
                <img src={next.image} alt="picture stuffs" />
                <h4>{next.title}</h4>
                <h5>{next.channel}</h5>
            </div>
        )
    })
    return (
        <div>
            {nextVideo}
        </div>
    )
}
