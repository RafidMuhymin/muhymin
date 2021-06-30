import React from "react";
import Layout from "../components/Templates/Layout/Layout";
import SubscriptionForm from "../components/Forms/SubscriptionForm/SubscriptionForm";
import Bio from "../components/Shared/Bio/Bio";
import { graphql, useStaticQuery } from "gatsby";
import { BgImage } from "gbimage-bridge";
import "../styles/index.scss";

export default function Index() {
  const { frontBanner, profilePicture } = useStaticQuery(graphql`
    {
      frontBanner: file(
        relativePath: { eq: "images/front-banner-background.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      profilePicture: file(
        relativePath: { eq: "images/profilePicture/rafid-muhymin.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const frontBannerData = frontBanner.childImageSharp.gatsbyImageData;
  const profilePictureData = profilePicture.childImageSharp.gatsbyImageData;
  const frontBannerAvif = frontBannerData.images.sources[0].srcSet.slice(0, 75);
  return (
    <Layout
      link={[{ rel: "preload", as: "image", href: `${frontBannerAvif}` }]}
    >
      <BgImage image={frontBannerData} className="row p-3">
        <div className="col-md-5">
          <SubscriptionForm />
        </div>
      </BgImage>
      <Bio profilePic={profilePictureData} />
    </Layout>
  );
}

