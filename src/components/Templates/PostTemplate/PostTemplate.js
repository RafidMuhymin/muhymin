import loadable from "@loadable/component";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../Layout/Layout";
import Sidebar from "./Sidebar/Sidebar";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./PostTemplate.scss";
import ShareButtons from "./ShareButtons";
import Fallback from "../../Shared/Fallback/Fallback";

const Comment = loadable(() => import("./Comment/Comment"));

export default function PostTemplate({ data, pageContext }) {
  const { slug, previous, next } = pageContext;

  const md = data.mdx;
  const fm = md.frontmatter;
  const sm = data.site.siteMetadata;

  const markdown = md.body;
  const desc = fm.description || md.excerpt;
  const title = fm.title;
  const date = new Date(fm.date).toDateString();

  const author = fm.author?.id || sm.author.name;
  const authorFb = fm.author?.fb || sm.social.fb;
  const authorTwitter = fm.author?.twitter || sm.social.twitter;
  const authorBio = fm.author?.bio || sm.author.summary;
  const authorProfilePicture =
    fm.author?.profilePicture?.childImageSharp?.gatsbyImageData;

  const fImgData = fm.featuredImg.childImageSharp.gatsbyImageData;
  const imageExt = fm.featuredImg.extension;
  const ogImage = sm.siteUrl + fm.featuredImg.publicURL;
  const imageWidth = fImgData.width;
  const imageHeight = fImgData.height;
  const imageType = `image/` + imageExt;

  const readingTime = md.timeToRead;
  const publishedTime = md.parent.birthTime;
  const modifiedTime = md.parent.mtime;
  return (
    <Layout
      description={desc}
      title={title}
      type={`article`}
      twitterId={authorTwitter}
      imagePath={ogImage}
      imageAlt={title}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      imageType={imageType}
      meta={[
        {
          property: `article:author`,
          content: authorFb,
        },
        {
          property: `article:publisher`,
          content: `https://web.facebook.com/rafidmuhyminwafi`,
        },
        {
          property: `article:published_time`,
          content: `${publishedTime}`,
        },
        {
          property: `article:modified_time`,
          content: `${modifiedTime}`,
        },
        {
          name: `twitter:label1`,
          content: `Written By`,
        },
        {
          name: `twitter:data1`,
          content: author,
        },
        {
          name: `twitter:label2`,
          content: `Est. reading time`,
        },
        {
          name: `twitter:data2`,
          content: `${readingTime}min`,
        },
      ]}
    >
      <div>
        <div id="featured-image">
          <GatsbyImage image={fImgData} alt={title} />
        </div>
        <section id="blog-body" className="d-flex flex-wrap">
          <main className="p-3">
            <h1>{title}</h1>
            <p className="fs-6 text-secondary">
              By {author} • Last Updated On {date}
            </p>
            <MDXRenderer>{markdown}</MDXRenderer>
            <ShareButtons
              url={sm.siteUrl + "/" + slug}
              title={title}
              media={ogImage}
              twitterHandle={authorTwitter}
              description={desc}
            ></ShareButtons>
            <div className="prevNext d-flex flex-wrap my-4">
              {previous && (
                <div className="prev me-auto">
                  <span className="d-block p-2 text-secondary">⬅ Previous</span>
                  <Link
                    to={"/" + previous.frontmatter.slug}
                    className="d-block p-3 rounded-3"
                  >
                    {previous.frontmatter.title}
                  </Link>
                </div>
              )}
              {next && (
                <div className="next ms-auto">
                  <span className="d-block p-2 text-secondary">Next ➡</span>
                  <Link
                    to={"/" + next.frontmatter.slug}
                    className="d-block p-3 rounded-3"
                  >
                    {next.frontmatter.title}
                  </Link>
                </div>
              )}
            </div>
          </main>
          <Sidebar
            author={author}
            authorBio={authorBio}
            authorFb={authorFb}
            authorTwitter={authorTwitter}
            authorProfilePicture={authorProfilePicture}
          />
          <Comment fallback={<Fallback />} postTitle={title} />
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query post($slug: String) {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        siteUrl
        social {
          fb
          twitter
        }
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      timeToRead
      tableOfContents
      parent {
        ... on File {
          birthTime
          mtime
        }
      }
      frontmatter {
        title
        date
        author {
          id
          fb
          twitter
          bio
          profilePicture {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        description
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
          extension
        }
      }
    }
  }
`;
