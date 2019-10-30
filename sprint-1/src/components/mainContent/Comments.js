import React from 'react'
// import video from '../../assets/images/video-list-0.jpg'
// import playBtn from '../../assets/icons/SVG/Icon-play.svg'
// import scrubber from '../../assets/icons/SVG/Icon-scrubber-control.svg'
// import full from '../../assets/icons/SVG/Icon-fullscreen.svg'
// import volume from '../../assets/icons/SVG/Icon-volume.svg'
// import video from '../../assets/video/BrainStation Sample Video.mp4'


export default function Comments({ current }) {
    console.log(current);
    const comments = current.comments && current.comments.map(function (comment) {
        return (
            <div>
                <img src={comment.avatar} alt="face" />
                <h5>{comment.name}</h5>
                <h5>{comment.date}</h5>
                <p>{comment.comment}</p>

            </div>

        );


    });
    return (
        <div className="video-player">
            {comments}
        </div>
    )
}
