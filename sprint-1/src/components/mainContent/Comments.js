import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'


export default function Comments({ current }) {
    console.log(current.comments.length);
    const comments = current.comments && current.comments.map(function (comment) {
        return (
            <div className="comments__comment">
                <img className="comments__comment--avatar" src={comment.avatar} alt="face" />
                <h5 className="comments__comment--name">{comment.name}</h5>
                <h5 className="comments__comment--date">{comment.date}</h5>
                <p className="comments__comment--comment">{comment.comment}</p>

            </div>

        );


    });
    return (
        <>
            <form className="comment-input">
                <h3 className="comment-input--count">{current.comments.length} Comments</h3>
                <div className="comment-input__section">
                    <img className="comment-input__section--avatar" src={Avatar} alt="Avatar" />

                    {/* <input className="comment-input__section--name" type="text" name="name" placeholder="Name"></input> */}
                    <label className="comment-input__section--label">Join the conversation</label>
                    <textarea name="comment" className="comment-input__section--comment" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="comment-input--button">Comment</button>
            </form>
            <div className="comments">
                {comments}
            </div>
        </>
    )
}
