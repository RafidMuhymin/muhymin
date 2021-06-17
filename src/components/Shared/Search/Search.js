import { navigate } from "gatsby-link";
import React from "react";
import "./Search.scss";

export default function Search() {
  const search = (evt) => {
    evt.preventDefault();
    const query = evt.target[0].value;
    navigate(`/search?${query}`);
  };
  return (
    <form
      id="search-widget"
      className="d-block d-md-inline position-relative"
      onSubmit={search}
    >
      <input
        className="form-control d-inline"
        type="text"
        placeholder="Search …"
        onSubmit={search}
        required
      />
      <input className="position-absolute end-0" type="submit" value="🔎" />
    </form>
  );
}
