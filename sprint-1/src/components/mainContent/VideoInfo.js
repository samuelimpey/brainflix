import React from 'react'
import likes from '../../assets/icons/SVG/Icon-likes.svg'
import views from '../../assets/icons/SVG/Icon-views.svg'

export default function VideoInfo({ current }) {
    return (
        <div className="video-info">
            <div className="video-info__info">
                <h1 className="video-info__info--title">{current.title}</h1>
                <div className="video-info__info--channel">
                    <h4 className="video-info__info--channel--name">{current.channel}</h4>
                    <h5 className="video-info__info--channel--timestamp">{current.timestamp}</h5>
                </div>
                <div className="video-info__info--stats">
                    <h5 className="video-info__info--stats--views"><img className="video-info__info--stats--icon" src={views} alt="eyeball" />{current.views}</h5>
                    <h5 className="video-info__info--stats--likes"><img className="video-info__info--stats--icon" src={likes} alt="heart" />{current.likes}</h5>
                </div>
            </div>
            <p className="video-info__description">{current.description}</p>
        </div>
    )
}
