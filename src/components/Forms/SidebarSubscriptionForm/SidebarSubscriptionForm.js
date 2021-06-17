import React from "react";
import { useForm } from "react-hook-form";
import "./SidebarSubscriptionForm.scss";

export default function SidebarSubscriptionForm() {
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
        console.log("Subscribed Successfully", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      id="subscription-form"
      className="mt-4 mb-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center">Subscibe to Our Newsletter</h3>

      <div
        className="my-3"
        style={{ height: "2px", backgroundColor: "lightgray" }}
      ></div>

      <input
        type="email"
        name="email"
        id="email"
        className="form-control my-2"
        placeholder="Enter Your Email Address"
        {...register("email", { required: true })}
      />
      {errors.email && <small>This field is required</small>}
      <input
        type="text"
        name="name"
        id="name"
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
