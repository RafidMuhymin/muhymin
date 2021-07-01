import React, { useState } from "react";
import SubmitButton from "../SubmitButton";
import Form from "../Form";
import "./CommentForm.scss";

export default function CommentForm({
  postTitle,
  setComments,
  isReplyForm,
  setIsReplyForm,
  selectedComment,
  setSelectedComment,
}) {
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const comment = async (data) => {
    setProcessing(true);
    const postReq = (req, method, callback) => {
      fetch("/api/comment", {
        method,
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Commented Successfully", res);
          callback(JSON.parse(localStorage.getItem(`comments-${postTitle}`)));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const setLocalStorage = (items) => {
      localStorage.setItem(`comments-${postTitle}`, JSON.stringify(items));
      setComments(items);
      setProcessing(false);
    };

    if (!isReplyForm) {
      data.postTitle = postTitle;
      data.date = new Date().getTime();
      postReq(data, "POST", (lscomments) => {
        let newLscomments = lscomments ? [...lscomments, data] : [data];
        setLocalStorage(newLscomments);
      });
    } else {
      const comment = selectedComment;
      comment.replies ??= [];
      data.date = new Date().getTime();
      comment.replies.push(data);
      postReq(comment, "PUT", (lscomments) => {
        lscomments.find((lscomment) => lscomment._id === comment._id).replies =
          comment.replies;
        setLocalStorage(lscomments);
        setIsReplyForm(false);
        setSelectedComment({});
      });
    }
  };
  return (
    <Form id="comment-form" setErrors={setErrors} callback={comment}>
      <label className="d-block">
        Your Name
        <input className="form-control my-2" type="text" name="name" required />
      </label>
      {errors.name && <small>This field is required</small>}
      <label className="d-block">
        Type your Comment
        <textarea
          className="form-control my-2"
          cols="30"
          rows="5"
          name="comment"
          required
        ></textarea>
      </label>
      {errors.comment && <small>This field is required</small>}
      <div className="d-flex align-items-center">
        <div
          className="flex-grow-1"
          style={{ height: "1px", backgroundColor: "lightgray" }}
        ></div>

        <SubmitButton
          className="form-control m-2 d-inline-block w-auto p-3 fs-5"
          boolean={processing}
          value="Post Your Comment"
        />

        <div
          className="flex-grow-1"
          style={{ height: "1px", backgroundColor: "lightgray" }}
        ></div>
      </div>
    </Form>
  );
}
