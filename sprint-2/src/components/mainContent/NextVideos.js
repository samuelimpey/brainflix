import React from 'react'
import { Link } from 'react-router-dom';

export default function NextVideos({ next }) {

    const nextVideo = next && next.map(function (next) {
        // console.log(next);
        return (
            <div className="next-videos__video" key={next.id}>
                <Link
                    to={`/Videos${next.id}`}
                    className="next-videos__video"
                    key={next.id}
                >
                    <img className="next-videos__video--image" src={next.image} alt="picture stuffs" />
                    <div className="next-videos__video__info">
                        <h4 className="next-videos__video__info--title">{next.title}</h4>
                        <h4 className="next-videos__video__info--channel">{next.channel}</h4>
                    </div>
                </Link>
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
