import React from "react";
import { useState } from "react";
import getFormState from "../getFormState";
import SubmitButton from "../SubmitButton";
import "./SubscriptionForm.scss";

export default function SubscriptionForm({ isSidebar }) {
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const classname = isSidebar ? "mt-4 mb-2" : "";

  const onSubmit = () => {
    const { data, errs } = getFormState();
    if (errs.length > 0) {
      setErrors(errs);
    } else {
      setProcessing(true);
      const splittedName = data.name.split(" ");
      const lastname = splittedName.splice(splittedName.length - 1)[0];
      const firstname = splittedName.join(" ");

      const body = JSON.stringify({
        createdAt: new Date().toISOString(),
        firstName: firstname,
        lastName: lastname,
        identifiers: [
          {
            type: "email",
            id: data.email,
            sendWelcomeMessage: true,
            channels: {
              email: {
                status: "subscribed",
                statusDate: new Date().toISOString(),
              },
            },
          },
        ],
      });

      fetch("https://api.omnisend.com/v3/contacts", {
        method: "POST",
        headers: {
          "x-api-key": process.env.GATSBY_X_API_KEY,
          "content-type": "application/json",
        },
        body,
      })
        .then(() => {
          fetch("api/subscribe", {
            method: "POST",
            body,
          })
            .then(() => setProcessing(false))
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className={`subscription-form ${classname}`} onSubmit={onSubmit}>
      {isSidebar ? (
        <>
          <h3 className="text-center">Subscibe to Our Newsletter</h3>
          <hr className="my-3" />
        </>
      ) : (
        <>
          <h1 className="text-center mb-3">Subscibe to Our Newsletter</h1>
          <h2 className="text-center mb-3">
            Get the Latest Updates Delivered right to Your Inbox
          </h2>
        </>
      )}

      <label>
        Enter Your Email Address
        <input
          type="email"
          className="form-control my-2"
          name="email"
          required
        />
      </label>
      {errors.email && <small>This field is required</small>}

      <label>
        Enter Your Full Name
        <input type="text" className="form-control my-2" name="name" required />
      </label>
      {errors.name && <small>This field is required</small>}

      <SubmitButton
        className="subscribe-btn form-control my-2 bg-danger text-white"
        boolean={processing}
        value="Subscribe"
      />
    </form>
  );
}
