import React from "react";

export default function Form({ children, setErrors, callback, ...rest }) {
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const errs = {};
    for (const key of Object.keys(data)) {
      if (data[key].required && data[key] === "") {
        errs[key] = "This field is required";
      }
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      callback(data);
    }
  };
  return (
    <form onSubmit={submit} {...rest}>
      {children}
    </form>
  );
}
