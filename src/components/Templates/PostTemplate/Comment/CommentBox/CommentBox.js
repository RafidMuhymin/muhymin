import React from "react";
import "./CommentBox.scss";

export default function CommentBox({
  comment,
  currentComment,
  isReplyForm,
  setIsReplyForm,
  setSelectedComment,
  focusOnReply,
  style,
}) {
  const publishedDate = new Date(comment.date).toUTCString();
  return (
    <div style={style}>
      <div className="comment-box d-flex flex-wrap my-3">
        <div className="image-holder">
          <img
            className="w-100"
            src='data:image/svg+xml;utf8,<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1=".2" x2=".8" y1=".2" y2="1"><stop stop-color="%23fff" offset="0"/><stop stop-color="%239d9fa1" offset="1"/></linearGradient><linearGradient id="b" x1=".9" x2=".1" y1=".8" y2=".2"><stop stop-color="%23d6a477" offset="0"/><stop stop-color="%23e4c3a8" offset="1"/></linearGradient></defs><path d="M519 563c0 145-503 145-503 0s113-262 251-262 252 117 252 262z" fill="url(%23a)"/><path d="M366 321l-97 341-100-341A263 263 0 0016 563c0 145 503 145 503 0 0-109-63-202-153-242z"/><ellipse cx="267.4" cy="191" rx="167.6" ry="174.9" fill="url(%23b)"/><path d="M435 257c-23 7 0-197-228-116-7 0-16-21-65-15-6 0-24 12-30 13-20 2-10-20-4-32 2-7 6-13 10-19 30-43 90-72 159-72 98 0 176 44 158 241" fill="%233f3f3f"/></svg>'
            alt=""
          />
        </div>
        <div className="comment-details">
          <strong className="d-block">{comment.name} commented ―</strong>
          <span className="d-block text-secondary">{publishedDate}</span>
          <span className="d-block">{comment.comment}</span>
          {
            <button
              onClick={() => {
                if (isReplyForm) {
                  focusOnReply();
                } else {
                  setIsReplyForm(true);
                }
                setSelectedComment(currentComment);
              }}
              className="reply-button d-inline-block btn py-2 px-3 my-3"
            >
              <strong>Reply →</strong>
            </button>
          }
        </div>
      </div>
      {comment.replies &&
        comment.replies.map((reply) => (
          <CommentBox
            comment={reply}
            currentComment={currentComment}
            isReplyForm={isReplyForm}
            setIsReplyForm={setIsReplyForm}
            setSelectedComment={setSelectedComment}
            style={{ width: "90%", marginLeft: "auto" }}
          ></CommentBox>
        ))}
    </div>
  );
}
