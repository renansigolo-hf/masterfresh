const path = require("path");
const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
          },
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".json", ".ts", ".tsx", "..."],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
    },
  },
  devtool: "inline-source-map",
  mode: process.env.NODE_ENV || "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/public",
      watch: {
        ignored: /node_modules/,
        poll: 1000,
      },
    },
  },
  plugins: [
    new ProvidePlugin({
      React: "react", // automatically import react where needed
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
