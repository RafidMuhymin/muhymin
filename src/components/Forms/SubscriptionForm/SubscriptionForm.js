import React from "react";
import { useForm } from "react-hook-form";
import "./SubscriptionForm.scss";

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Subscribed sSuccessfully", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form id="subscription-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="h1 text-center">Subscibe to Our Newsletter</div>
      <br />
      <div className="h2 text-center">
        Get the Latest Updates Delivered right to Your Inbox
      </div>
      <br />

      <input
        type="email"
        className="form-control my-2"
        placeholder="Enter Your Email Address"
        {...register("email", { required: true })}
      />
      {errors.email && <small>This field is required</small>}
      <input
        type="text"
        placeholder="Enter Your Full Name"
        className="form-control my-2"
        {...register("name", { required: true })}
      />
      {errors.name && <small>This field is required</small>}
      <input
        type="submit"
        id="subscibe-btn"
        value="Subscirbe"
        className="form-control my-2"
      />
    </form>
  );
}
