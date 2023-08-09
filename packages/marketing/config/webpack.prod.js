const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
    },
    shared: packageJson.dependencies
    })
  ]
};
config.resolve.fallback = { '@mui/material': false, '@mui/icons-material': false };
config.resolve.fallback = { '@material-ui/core': false, '@material-ui/icons': false };
module.exports = merge(commonConfig, prodConfig);
