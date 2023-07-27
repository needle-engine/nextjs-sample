const webpack = require("webpack");

module.exports = async () => {
  const { needleNext } = await import("@needle-tools/engine/plugins/next/index.js");
  return needleNext({webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts"],
  };
  return config;
  }}, { modules: { webpack } });
}
