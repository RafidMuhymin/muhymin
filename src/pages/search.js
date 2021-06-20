/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Templates/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Search from "../components/Shared/Search/Search";
import "../styles/search.scss";
import SearchResult from "../components/PageComponents/Search/SearchResult";

export default function search({ location }) {
  const query = location.search.slice(1);
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    const { index, store } = window.__LUNR__.en;
    const results = index.search(`*${query}*`).map(({ ref }) => store[ref]);
    console.log(results);
    setResults(results);
  }, [query]);

  const getRecentBlogposts = () => {
    const { allMdx } = useStaticQuery(graphql`
      {
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "posts/" } }
          limit: 4
        ) {
          nodes {
            id
            excerpt
            frontmatter {
              title
              slug
              featuredImg {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `);
    return allMdx.nodes;
  };

  return (
    <Layout>
      <main id="search-results" className="py-3 px-4">
        {results.length > 0 ? (
          <>
            <h1 className="text-center">
              Total {results.length} Results Found for The Query "{query}"
            </h1>
            {results.map(({ id, title, slug, image, excerpt }) => {
              return (
                <SearchResult
                  key={id}
                  title={title}
                  slug={slug}
                  image={image}
                  excerpt={excerpt}
                ></SearchResult>
              );
            })}
          </>
        ) : (
          <>
            <h1 className="text-center">
              No results found for The Query "{query}"
            </h1>
            <p>
              Oops... It seems there seems to be no article for your search.
              Please make sure you have typed correctly and search again!
            </p>
            <div className="w-75 m-auto">
              <Search />
            </div>
            <h1 className="mt-3 text-center">Recent Blogposts</h1>
            {getRecentBlogposts().map((blogpost) => {
              const { id, excerpt } = blogpost;
              const { title, slug, featuredImg } = blogpost.frontmatter;
              const { gatsbyImageData } = featuredImg.childImageSharp;
              return (
                <SearchResult
                  key={id}
                  title={title}
                  slug={slug}
                  image={gatsbyImageData}
                  excerpt={excerpt}
                ></SearchResult>
              );
            })}
          </>
        )}
      </main>
    </Layout>
  );
}
