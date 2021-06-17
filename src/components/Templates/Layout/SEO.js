import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({
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
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  );

  const { pathname } = useLocation();
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const siteURL = site.siteMetadata.siteUrl;

  return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{
          lang: `en-US`,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: type || `website`,
          },
          {
            property: `og:locale`,
            content: `en_US`,
          },
          {
            property: `og:site_name`,
            content: defaultTitle,
          },
          {
            property: `og:url`,
            content: `${siteURL}${pathname}`,
          },
          {
            property: `og:image`,
            content: imagePath || `${siteURL}/logo.png`,
          },
          {
            property: `og:image:secure_url`,
            content: imagePath || `${siteURL}/logo.png`,
          },
          {
            property: `og:image:width`,
            content: imageWidth || `1024`,
          },
          {
            property: `og:image:height`,
            content: imageHeight || `508`,
          },
          {
            property: `og:image:mime_type`,
            content: imageType || `image/png`,
          },
          {
            property: `twitter:image`,
            content: imagePath || `${siteURL}/logo.png`,
          },
          {
            property: `twitter:image:alt`,
            content: imageAlt || `The Muhymin Blog Brand Logo`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: twitterId || site.siteMetadata.social.twitter,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    </HelmetProvider>
  );
};

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: `The Muhymin Blog`,
};

export default SEO;
