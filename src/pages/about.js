import React from "react";
import Layout from "../components/Templates/Layout/Layout";
import Bio from "../components/Shared/Bio/Bio";
import "../styles/about.scss";
import { BgImage } from "gbimage-bridge";
import { graphql } from "gatsby";

export default function About({ data }) {
  const frontBanner = data.file.childImageSharp.gatsbyImageData;
  const frontBannerAvif = frontBanner.images.sources[0].srcSet.slice(0, 75);
  return (
    <Layout
      link={[{ rel: "preload", as: "image", href: `${frontBannerAvif}` }]}
    >
      <BgImage image={frontBanner}>
        <div id="about-head">
          <div className="h6">A few words</div>
          <div className="divider my-3"></div>
          <h2>About Me</h2>
        </div>
      </BgImage>
      <Bio />
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
