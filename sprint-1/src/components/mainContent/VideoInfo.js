import React from 'react'
import likes from '../../assets/icons/SVG/Icon-likes.svg'
import views from '../../assets/icons/SVG/Icon-views.svg'

export default function VideoInfo({ current }) {
    return (
        <div className="video-info">
            <div>
                <h1>{current.title}</h1>
                <div>
                    <h3>{current.channel}</h3>
                    <h5>{current.timestamp}</h5>
                </div>
                <div>
                    <h5><img src={views} alt="eyeball" />{current.views}</h5>
                    <h5><img src={likes} alt="heart" />{current.likes}</h5>
                </div>
            </div>
            <p>{current.description}</p>
        </div>
    )
}
