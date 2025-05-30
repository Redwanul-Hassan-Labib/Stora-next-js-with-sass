// const withSass = require("@zeit/next-sass");
// const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
// const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLess(
  withSass({
    env: {
      PUBLIC_URL: "",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    sassOptions: {
    implementation: 'sass-embedded',
  },

  })
);


