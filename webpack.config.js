const path = require("path");
const { ProvidePlugin, NormalModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const swcConfig = require("./.swcrc.json");

// Set node.env
process.env.NODE_ENV = process.env.NODE_ENV ?? "development";

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV,
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
        loader: "swc-loader",
        options: swcConfig,
      },
    ],
  },
  resolve: {
    extensions: [".json", ".ts", ".tsx", "..."],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "@environments": path.resolve(__dirname, "src/environments/"),
    },
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
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
    // replace environment files in production
    new NormalModuleReplacementPlugin(
      /src\/environments\/environment\/environment\/.ts/,
      "src/environments/environment.prod.ts"
    ),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
