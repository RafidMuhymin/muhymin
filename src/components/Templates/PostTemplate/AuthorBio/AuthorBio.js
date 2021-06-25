import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./AuthorBio.scss";
import FollowButtons from "../Social/FollowButtons";
import LazyLoad from "../../../Shared/LazyLoad/LazyLoad";
import "./AuthorBio.scss";

export default function AuthorBio({
  author,
  authorBio,
  authorFb,
  authorTwitter,
  authorProfilePicture,
}) {
  console.log(authorProfilePicture);
  return (
    <div id="authorBio" className="my-4">
      <h2>About The Author...</h2>

      <div className="py-2">
        <div className="text-center">
          <h3>Hey, I'm {author}!</h3>
          <p>{authorBio}</p>
        </div>
        <div className="d-flex justify-content-between">
          <LazyLoad>
            <FollowButtons
              author={author}
              facebook={authorFb}
              twitter={authorTwitter}
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}
