import React, { useState } from "react";
import getFormState from "../getFormState";
import SubmitButton from "../SubmitButton";
import "./ContactForm.scss";

export default function ContactForm() {
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    const { data, errs } = getFormState(e.target);
    if (errs.length > 0) {
      setErrors(errors);
    } else {
      setProcessing(true);
      const { name, info } = data;
      window.open(
        `mailto:?to=rafidmuhymin@gmail.com&subject=I am ${name} contacting you via the contact form on your website&body=${info}`,
        "_blank"
      );
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(() => {
          setProcessing(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form id="contact-form" className="p-4" onSubmit={onSubmit}>
      <h2 className="text-center">Send Us a Message</h2>
      <br />
      <label>
        Enter Your Email Address
        <input
          className="form-control my-3"
          type="email"
          name="email"
          required
        />
      </label>
      {errors.name && <small>This field is required</small>}

      <label>
        Enter Your Name
        <input className="form-control my-3" type="text" name="name" required />
      </label>
      {errors.email && <small>This field is required</small>}

      <label>
        Enter Your Website URL
        <input className="form-control my-3" type="url" name="website" />
      </label>

      <label>
        Type What You Want to Talk About
        <textarea
          className="form-control my-3"
          cols="30"
          rows="5"
          name="info"
          required
        ></textarea>
      </label>
      {errors.info && <small>This field is required</small>}

      <SubmitButton
        className="form-control my-3 bg-dark text-white"
        id="contact-btn"
        boolean={processing}
        value="Contact"
      />

      <small className="d-block my-2 text-center">
        <em>* You'll be redirected to your Mail Client when you submit.</em>
      </small>
    </form>
  );
}
