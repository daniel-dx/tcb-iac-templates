const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  // mode: 'development',
  // 解决async/await被babel转成generator后的兼容问题
  entry: ["../src/components/index.tsx"],
  watch: false,
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "shadcn.js",
    library: "SHADN",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject:
      'typeof globalThis !== "undefined"?globalThis:typeof window !== "undefined"?window:this',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, "./tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    //   "process.env.END_POINT": JSON.stringify(process.env.END_POINT),
    // }),
  ],
  externals: {
    react: { root: "React", commonjs: "react", commonjs2: "react" },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
    },
  },
};
