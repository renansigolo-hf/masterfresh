const path = require("path");
const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
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
    // enable Fast Refresh for React components
    new ReactRefreshWebpackPlugin(),
    // automatically import react where needed
    new ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
