const path = require('path');
const webpack = require('webpack');

// Webpack Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');


// Configuring the Extract-text-plugin for SCSS files specifically
const extractSass = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('styles/[name].[contenthash].css')
  }
});

const copyImages = new CopyPlugin([{
  from: 'assets/images/**/*'
}]);

const HtmlConfig = new HtmlPlugin({
  template: 'index.html',
  inject: 'body'
});


// Webpack will execute the following:
module.exports = {
  context: path.resolve(__dirname, './../src'),

  // Entry is where you define what files for webpack to use as a basis
  entry: {
    index: './js/client.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },

            {
                test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
            }

    ]
  },

  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].bundle.js',
    
    sourceMapFilename: '[name].map'
  },

 plugins: [
    HtmlConfig,
    extractSass,
    copyImages,
  ]
}

