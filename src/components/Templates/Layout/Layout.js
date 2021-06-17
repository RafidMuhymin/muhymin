/* eslint-disable import/first */
if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import SEO from "./SEO";
import "./bootstrap.css";
import "./Layout.scss";

export default function Layout({
  description,
  meta,
  imagePath,
  imageAlt,
  imageHeight,
  imageWidth,
  imageType,
  title,
  twitterId,
  type,
  children,
}) {
  return (
    <div id="layout">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.omnisend = window.omnisend || [];
      omnisend.push(["accountID", "60c77e97e95c7b001bfff28c"]);
      omnisend.push(["track", "$pageViewed"]);
      !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`,
          }}
        ></script>
      </head>
      <SEO
        description={description}
        meta={meta}
        imagePath={imagePath}
        imageAlt={imageAlt}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        imageType={imageType}
        title={title}
        twitterId={twitterId}
        type={type}
      ></SEO>
      <input
        type="checkbox"
        id="collapse"
        className="d-none"
        onClick={(e) => {
          if (e.target.checked === true) {
            document.body.style.overflowY = "hidden";
          } else {
            document.body.style.overflowY = "scroll";
          }
        }}
      />
      <Navbar />
      <section id="primary" className="m-auto">
        {children}
      </section>
      <Footer />
    </div>
  );
}
