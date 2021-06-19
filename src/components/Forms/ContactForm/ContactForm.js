import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, info } = data;
    window.open(
      `mailto:?to=rafidmuhymin@gmail.com&subject=I am ${name} contacting you via the contact form on your website&body=${info}`,
      "_blank"
    );
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form id="contact-form" className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Send Us a Message</h2>
      <input
        className="form-control my-3"
        type="email"
        placeholder="Enter Your Email Address"
        {...register("email", { required: true })}
      />
      {errors.name && <small>This field is required</small>}
      <input
        className="form-control my-3"
        type="text"
        placeholder="Enter Your Name"
        {...register("name", { required: true })}
      />
      {errors.email && <small>This field is required</small>}
      <input
        className="form-control my-3"
        type="url"
        placeholder="Enter Your Website URL (Optional)"
        {...register("website")}
      />
      <textarea
        className="form-control my-3"
        cols="30"
        rows="5"
        placeholder="Type What You Want to Talk About"
        {...register("info", { required: true })}
      ></textarea>
      {errors.info && <small>This field is required</small>}
      <input
        className="form-control my-3 bg-dark text-white"
        type="submit"
        value="Contact"
        id="contact-btn"
      />
      <small className="d-block my-2 text-center">
        <em>* You'll be redirected to your Mail Client when you submit.</em>
      </small>
    </form>
  );
}
