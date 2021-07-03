import loadable from "@loadable/component";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../Layout/Layout";
import Sidebar from "./Sidebar/Sidebar";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./PostTemplate.scss";
import Fallback from "../../Shared/Fallback/Fallback";
import LazyLoad from "../../Shared/LazyLoad/LazyLoad";

const Comment = loadable(() => import("./Comment/Comment"));
const ShareButtons = loadable(() => import("./Social/ShareButtons"));

export default function PostTemplate({ data, pageContext }) {
  const { previous, next } = pageContext;

  const md = data.mdx;
  const fm = md.frontmatter;
  const sm = data.site.siteMetadata;

  const { body: markdown, tableOfContents, timeToRead: readingTime } = md;
  const desc = fm.description || md.excerpt;
  const { title, date: publishedTime, mDate } = fm;

  const modifiedTime = mDate ? mDate : publishedTime;

  const author = fm.author?.id || sm.author.name;
  const authorFb = fm.author?.fb || sm.social.fb;
  const authorTwitter = fm.author?.twitter || sm.social.twitter;
  const authorBio = fm.author?.bio || sm.author.summary;
  const authorProfilePicture =
    fm.author?.profilePicture?.childImageSharp.gatsbyImageData ||
    data.file.childImageSharp.gatsbyImageData;

  const fImgData = fm.featuredImg.childImageSharp.gatsbyImageData;
  const imageExt = fm.featuredImg.extension;
  const ogImage = sm.siteUrl + fm.featuredImg.publicURL;
  const { width: imageWidth, height: imageHeight } = fImgData;
  const imageType = `image/` + imageExt;
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
      link={[
        {
          rel: "preload",
          as: "image",
          href: `${fImgData.images.sources[0].srcSet.slice(0, 75)}`,
        },
      ]}
      meta={[
        {
          property: `article:author`,
          content: `https://facebook.com/${authorFb}`,
        },
        {
          property: `article:publisher`,
          content: `https://facebook.com/${authorFb}`,
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
        <figure
          id="featured-image"
          className="d-flex flex-wrap justify-content-center px-3"
        >
          <GatsbyImage loading="eager" image={fImgData} alt={title} />
          <figcaption className="my-3 text-center fst-italic w-100">
            {title}
          </figcaption>
        </figure>
        <section id="blog-body" className="d-flex flex-wrap">
          <main className="p-3">
            <h1>{title}</h1>
            <p className="fs-6 text-secondary">
              {readingTime} min read • By {author} • Last Updated On{" "}
              {new Date(publishedTime).toDateString()}
            </p>
            <MDXRenderer items={tableOfContents.items}>{markdown}</MDXRenderer>
            <LazyLoad>
              <ShareButtons
                fallback={<Fallback />}
                title={title}
                user_id={authorTwitter}
                text={desc}
              />
            </LazyLoad>
            <div className="prevNext d-flex flex-wrap mb-4">
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
          <LazyLoad>
            <Comment fallback={<Fallback />} postTitle={title} />
          </LazyLoad>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query post($slug: String, $tocDepth: Int) {
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
      tableOfContents(maxDepth: $tocDepth)
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
    file(relativePath: { eq: "images/profilePicture/rafid-muhymin.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
