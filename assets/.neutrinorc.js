module.exports = {
  options: {
    output: "../priv/static",
  },
  use: [
    [
      "@neutrinojs/react",
      {
        html: {
          title: "Your Sanctuary",
        },
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
        devServer: {
          proxy: {
            "/api/*": {
              target: "http://localhost:4000",
              changeOrigin: true,
            },
          },
        },
      },
    ],
    [
      "@neutrinojs/style-loader",
      {
        loaders: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import"), // allows you to use @import
                require("postcss-custom-media"), // can set media queries as variables
                require("postcss-custom-properties"), // allows you to use css variables e.g. var(--my-variable)
                require("autoprefixer"), // adds vendor prefixes like -webkit or -moz to your css for better support
              ],
            },
          },
        ],
      },
    ],
  ],
}
