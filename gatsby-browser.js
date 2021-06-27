require("./src/styles/prismjs-a11y.css");

// How to change the default Webpack Loader in Gatsby JS?

// I am trying to use 'svg-url-loader' instead of the default 'url-loader' for SVG files. I have installed it, and it works fine with webpack-inline-loaders. But to avoid repeating the process, I decided to use the onCreateWebpackConfig API to change the loader for the SVG files. I added the below code in gatsby-node.js. But the website is now not displaying any SVG image but alt text. The src attributes of the IMG tags are using a faulty base64 encoded image and not the UTF8 encoded SVG XML tag.

// The console is not logging any errors.  I have created a local plugin at the /plugins dir, but it doesn't work also. I am developing my site on my local machine and building it using Gatsby Cloud. The problem persists in both places. Any help will be appreciated. Thank you.

// Here's the link to the [minimal repro](https://github.com/RafidMuhymin/gatsby-webpack-svg-url-loader).

// <!-- begin snippet: js hide: false console: true babel: false -->

// <!-- language: lang-js -->

//     exports.onCreateWebpackConfig = ({
//       stage,
//       getConfig,
//       rules,
//       loaders,
//       plugins,
//       actions,
//     }) => {
//       actions.setWebpackConfig({
//         module: {
//           rules: [
//             {
//               test: /\.svg/,
//               use: {
//                 loader: "svg-url-loader",
//                 options: {
//                   limit: 4096,
//                   iesafe: true,
//                 },
//               },
//             },
//           ],
//         },
//       });
//     };

// <!-- end snippet -->

// node.js, webpack, gatsby, url-loader, webpack-loader
