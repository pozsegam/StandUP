const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve("src/manifest.json"), to: path.resolve("dist") },
        { from: path.resolve("src/assets/icon.png"), to: path.resolve("dist") },
        {
          from: path.resolve("src/assets/break_time.svg"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/get_back_to_work.svg"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "StandUP",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  output: {
    filename: "[name].js",
  },
};
