const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const fs = require("fs");
const lunr = require("lunr");

exports.createPages = async ({ graphql, actions }) => {
  console.log(actions);
  const { data } = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "posts/" } }) {
        edges {
          node {
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
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  const { edges } = data.allMdx;

  const store = {};
  const fullIndex = {};
  const index = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("slug");
    this.field("image");

    edges.forEach(({ node }) => {
      const id = node.id;
      const doc = {
        id,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        slug: node.frontmatter.slug,
        image: node.frontmatter.featuredImg.childImageSharp.gatsbyImageData,
      };
      this.add(doc);
      store[id] = doc;
    });
  });

  fullIndex["en"] = { index, store };
  fs.writeFileSync(`public/search_index.json`, JSON.stringify(fullIndex));

  edges.forEach(({ node, previous, next }) => {
    actions.createPage({
      path: "/" + node.frontmatter.slug,
      component: path.resolve(
        "./src/components/Templates/PostTemplate/PostTemplate.js"
      ),
      context: { slug: node.frontmatter.slug, previous: previous, next: next },
    });
  });

  const postsPerPage = 6;
  const pageCount = Math.ceil(edges.length / postsPerPage);

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `blog` : `blog/${i + 1}`,
      component: path.resolve(
        "./src/components/Templates/Blogpage/Blogpage.js"
      ),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageCount,
        currentPage: i + 1,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter implements Node {
      description: String
      facebook: String
      twitter: String
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new LoadablePlugin(),
      new HtmlWebpackPlugin(),
      new HtmlInlineScriptPlugin([
        /runtime~.+[.]js$/,
        /app~.+[.]js$/,
        /framework~.+[.]js$/,
      ]),
    ],
  });
};
