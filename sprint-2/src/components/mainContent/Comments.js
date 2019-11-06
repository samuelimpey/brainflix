import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'


export default function Comments({ current }) {
    console.log(current.comments);
    const comments = current.comments && current.comments.map(function (comment) {
        return (
            <div className="comments__comment" key={comment.id}>
                <img className="comments__comment--avatar" src={comment.avatar} alt="face" />
                <div className="comments__comment__content">
                    <div className="comments__comment__content__head">
                        <h5 className="comments__comment__content__head--name">{comment.name}</h5>
                        <h5 className="comments__comment__content__head--date">{comment.date}</h5>
                    </div>
                    <p className="comments__comment__content--comment">{comment.comment}</p>
                </div>


            </div>

        );


    });
    return (
        <>
            <form className="comment-input">
                <h3 className="comment-input--count"> {current.comments.length} Comments</h3>
                <div className="comment-input__section">
                    <img className="comment-input__section--avatar" src={Avatar} alt="Avatar" />
                    <div className="comment-input__section--form">
                        <div className="comment-input__section--form--inner">
                            <label className="comment-input__section--form--label">JOIN THE CONVERSATION</label>
                            <textarea name="comment" className="comment-input__section--form--comment" placeholder="Add a new comment"></textarea>
                        </div>
                        <button type="submit" id="button">COMMENT</button>
                    </div>
                </div>
            </form>
            <div className="comments">
                {comments}
            </div>
        </>
    )
}
