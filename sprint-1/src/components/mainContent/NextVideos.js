import React from 'react'

export default function NextVideos({ next }) {
    const nextVideo = next && next.map(function (next) {
        return (
            <div className="next-videos__video">
                <img className="next-videos__video--image" src={next.image} alt="picture stuffs" />
                <div className="next-videos__video__info">
                    <h4 className="next-videos__video__info--title">{next.title}</h4>
                    <h4 className="next-videos__video__info--channel">{next.channel}</h4>
                </div>
            </div>
        )
    })
    return (
        <div className="next-videos">
            <h5 className="next-videos--header">NEXT VIDEO</h5>
            {nextVideo}
        </div>
    )
}
