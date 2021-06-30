const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "posts/" } }) {
        edges {
          node {
            frontmatter {
              slug
              tocDepth
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

  edges.forEach(({ node, previous, next }) => {
    const { slug, tocDepth } = node.frontmatter;
    actions.createPage({
      path: "/" + slug,
      component: path.resolve(
        "./src/components/Templates/PostTemplate/PostTemplate.js"
      ),
      context: { slug, tocDepth, previous, next },
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
  const config = getConfig();

  config.module.rules.find(
    (rule) =>
      rule.test &&
      rule.test.toString() ===
        "/\\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\\?.*)?$/"
  ).test = /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;

  config.module.rules.push({
    test: /\.svg/,
    use: {
      loader: "svg-url-loader",
      options: {
        limit: 4096,
        iesafe: true,
      },
    },
  });

  config.plugins.push(new LoadablePlugin());

  actions.replaceWebpackConfig(config);
};
