import React from "react";
import Layout from "../components/Templates/Layout/Layout";
import Search from "../components/Shared/Search/Search";
import SubscriptionForm from "../components/Forms/SubscriptionForm/SubscriptionForm";
import { Link } from "gatsby";
import "../styles/404.scss";

export default function NotFound() {
  return (
    <Layout>
      <div id="not-found" className="mx-auto text-center p-3">
        <h1>Oops... It seems the page you requested does not exist.</h1>
        <img
          src='data:image/svg+xml;utf8,<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><g fill="%23FB503B"><path d="M155 237l-1-1-1-1 1-4 1-1 1 1-1 4h4l1 1-1 1h-4zm-2 3l1-2 1 1 1 4-1 1h-1l-1-4zm3-13l2-4h1l1 2-3 3h-1v-1zm0 21v-2l2 1 2 3v1h-1c-1 0 0 0 0 0l-3-3zm5-28l4-2 1 1v1l-4 2h-1v-2zm1 34v-1l1-1 4 2v1l-1 1-4-2zm1-17l-1-1 1-1h4l1 1-1 1h-4zm6-20h5l1 1-2 1h-4l-1-1 1-1zm0 39l1-1h4l1 1v1h-5l-1-1zm2-19l-1-1 1-1h4l2 1-2 1h-4zm6-18v-1l1-1 4 2v2h-1l-4-2zm1 35l4-2 1 1v1l-4 2h-1l-1-1 1-1zm2-17l-1-1 1-1h4l1 1-1 1h-4zm4-14v-1h2l2 3v2h-1v-1l-3-3zm1 27l2-3h2v1l-3 3-1 1v-2zm3-13l-1-1 1-1h3l1 1-1 1h-3zm1-7v-2l2 1 1 4-1 1-1-1-1-3zM204 218l2-1 1 1v4l-1 1-2-1v-4zm0 8l2-1 1 1v4l-1 1-2-1v-4zm0 11v-2l2-1v-1l1-1 1 2-1 3v2l-1 1-2-1v-2zm0 6l2-1 1 1v5l-1 1-2-1v-5zm0 9l2-1 1 1v4l-1 1-2-1v-4zm4-23l2-4h2v2l-2 3-1 1-1-1v-1zm5-7l4-3 1 1v1l-3 3h-1-1v-2zm8-5h4l1 1-1 1h-4-1l1-2zM241 218l1-1 1 1v4l-1 1-1-1v-4zm0 8l1-1 1 1v4l-1 1-1-1v-4zm0 11v-2l1-1v-1l2-1v2l-1 3v2l-1 1-1-1v-2zm0 6l1-1 1 1v5l-1 1-1-1v-5zm0 9l1-1 1 1v4l-1 1-1-1v-4zm3-23l3-4h1v2l-2 3-1 1v-1l-1-1zm6-7l3-3 2 1-1 1-3 3h-1v-2zm7-5h5l1 1-1 1h-6l1-2zM273 237v-4l2-1v5l-1 1-1-1zm1 5v-2l2 1 1 4-1 1h-1l-1-4zm1-13l2-4h1v1l-1 4h-2v-1zm2 20l1-1h1l3 3v2h-1-1l-3-4zm3-27l3-3h1v2l-3 2h-1v-1zm4 33l-1-1 2-1 4 2v1l-1 1-4-2zm3-38h5l1 1-1 1h-4-1-1l1-2zm5 38h6l-1 2h-5v-2zm4-36l-1-1 1-1 4 1 1 2h-2l-3-1zm4 34l3-2h2l-1 1-3 3h-1-1l1-2zm3-31l-1-1h2l3 3v1l-1 1-1-1-2-3zm3 26l2-3 1-1 1 1-3 4v1l-1-1v-1zm1-19l1-2 1 1 2 4-1 1-1-1-2-3zm2 12v-5l1-1 1 1v5l-1 1-1-1zM325 218l1-1 1 1v4l-1 1-1-1v-4zm0 8l1-1 1 1v4l-1 1-1-1v-4zm0 11v-2l1-1 1-1 1-1 1 2-2 3v2l-1 1-1-1v-2zm0 6l1-1 1 1v5l-1 1-1-1v-5zm0 9l1-1 1 1v4l-1 1-1-1v-4zm3-23l3-4h1l1 2-3 3-1 1v-1l-1-1zm6-7l3-3 2 1-1 1-3 3h-1v-2zm7-5h5l1 1-1 1h-5v-2z"/></g><g fill="%23FB503B"><path d="M187 128v27h-25v20h-26v-20h-32c-13 0-24-8-24-21 0-6 2-11 5-16l38-49h39v59h25zm-51-32l-24 32h24V96zM305 122c0 30-24 56-55 56s-55-26-55-56 24-56 55-56 55 26 55 56zm-27 0c0-16-12-29-28-29s-28 13-28 29 12 30 28 30 28-14 28-30zM420 128v27h-24v20h-27v-20h-32c-12 0-24-8-24-21 0-6 2-11 6-16l37-49h40v59h24zm-51-32l-24 32h24V96z"/></g></svg>'
          alt="404 not found | The Muhymin Blog"
        />

        <p>
          Please check if you have made a typo in the URL. Or, you can search
          for articles below.
        </p>
        <div className="w-50 mx-auto">
          <Search />
        </div>
        <p className="mt-3">
          You can go back to the{" "}
          <strong>
            <Link to="/">Homepage</Link>
          </strong>{" "}
          or check out the recent{" "}
          <strong>
            <Link to="/blog">Blogposts</Link>
          </strong>{" "}
          if you think you have come here by mistake. Or, you can subscibe to
          The Muhymin Blog newsletter to get the latest updates delivered right
          to your Inbox.
        </p>
        <SubscriptionForm />
      </div>
    </Layout>
  );
}
