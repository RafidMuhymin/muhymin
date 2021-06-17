import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BgImage } from "gbimage-bridge";
import "./Bio.scss";

export default function Bio() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/rafid-muhymin-profile-picture.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const profilePic = file.childImageSharp.gatsbyImageData;

  return (
    <div className="row front-bio">
      <BgImage
        image={profilePic}
        className="col-md-6 p-5 position-relative profile-picture"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark mix-blend-multiply overlay"></div>
      </BgImage>
      <div className="col-md-6 p-5">
        <h3>Rafid Muhymin Wafi</h3>
        <br />
        <div className="divider w-25"></div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          accusamus placeat debitis qui eligendi. Consectetur soluta laudantium
          maiores distinctio in architecto nihil! Unde voluptatibus tenetur
          nesciunt quis delectus corrupti, accusamus, quod ipsum ab aliquam sint
          natus vel ad quae nisi numquam odio molestias quibusdam cum esse totam
          fuga repellendus ipsam!
        </p>
      </div>
    </div>
  );
}
