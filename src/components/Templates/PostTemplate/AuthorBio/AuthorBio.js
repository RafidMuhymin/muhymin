import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import "./AuthorBio.scss";

export default function AuthorBio({
  author,
  authorBio,
  authorFb,
  authorTwitter,
  authorProfilePicture,
}) {
  return (
    <div id="authorBio" className="my-4">
      <h2>About The Author...</h2>
      {authorProfilePicture ? (
        <GatsbyImage
          className="w-100 h-0 rounded-3"
          image={authorProfilePicture}
          alt={author}
        ></GatsbyImage>
      ) : (
        <StaticImage
          className="w-100 h-0 rounded-3"
          src="../../../../data/images/profilePicture/rafid-muhymin.jpg"
          alt="Rafid Muhymin Wafi"
          placeholder="tracedSVG"
          width={500}
        ></StaticImage>
      )}
      <div className="py-2">
        <div className="text-center">
          <h3>Hey, I'm {author}!</h3>
          <p>{authorBio}</p>
        </div>
        <div className="d-flex justify-content-between">
          <a
            href={`${authorFb}`}
            style={{ backgroundColor: `#3b5998` }}
            className="p-2 rounded-3"
          >
            <span className="text-white">Follow @facebook</span>
          </a>
          <a
            href={`https://twitter.com/${authorTwitter.slice(1)}`}
            style={{ backgroundColor: `#00acee` }}
            className="p-2 rounded-3"
          >
            <span className="text-white">Follow @twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}
