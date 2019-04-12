const webpack = require("webpack");
const webpackBase = require("./../webpack/webpack.base");

module.exports = ({ config, mode }) => {
  config.devtool = webpackBase.getDevTool();
  config.module.rules = config.module.rules.concat(webpackBase.getRules());
  config.plugins = config.plugins.concat(webpackBase.getPlugins());
  config.resolve.extensions = config.resolve.extensions.concat(
    webpackBase.getExtensions()
  );
  config.module.rules[0].use[0].options.sourceType = "unambiguous";

  return config;
};
