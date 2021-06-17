import React from "react";
import Layout from "../components/Templates/Layout/Layout";
import Bio from "../components/Shared/Bio/Bio";
import "../styles/about.scss";
import { BgImage } from "gbimage-bridge";
import { graphql } from "gatsby";

export default function About({ data }) {
  const frontBanner = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <BgImage image={frontBanner}>
        <div id="about-head">
          <div className="h6">A few words</div>
          <div className="divider my-3"></div>
          <h1>About Me</h1>
        </div>
      </BgImage>

      <Bio></Bio>
    </Layout>
  );
}

export const query = graphql`
  {
    file(relativePath: { eq: "images/front-banner-background.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
