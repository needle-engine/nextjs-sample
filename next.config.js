const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = async () => {
  // Load environment variables from .env file
  dotenv.config();

  const { needleNext } = await import("@needle-tools/engine/plugins/next/index.js");
  return needleNext({
    webpack: (config) => {
      config.resolve.extensionAlias = {
        ".js": [".js", ".ts"],
      };
      return config;
    }
  }, {
    modules: { webpack },
    // license: {
    //   accessToken: "...",
    //   team: "<name or id of your team>"
    // }
  });
}
