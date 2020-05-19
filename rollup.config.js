import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

const config = {
  input: "site/scripts/main.js",
  output: {
    dir: "site/static/scripts",
    format: "esm",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};

export default config;
