import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'


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
        <>
            <form className="comment-section">
                <div className="comment-input-section">
                    <img id="avatar" src={Avatar} alt="Avatar" />
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"></input>
                    <textarea name="comment" className="comment-section__comment" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="comment-section__button">Comment</button>

                <div id="comments"></div>
            </form>
            <div className="video-player">
                {comments}
            </div>
        </>
    )
}
