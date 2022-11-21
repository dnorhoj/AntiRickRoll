const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  entry: {
    popup: {
      import: './src/popup/main.js',
      filename: 'popup/[name].js',
    },
    content: {
      import: './src/background/content.js',
      filename: 'background/[name].js',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        options: {
          preprocess: sveltePreprocess({ postcss: true })
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.svelte'
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json' },
        { from: 'src/icons', to: 'icons' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/warn/index.html',
      filename: 'warn/index.html',
      inject: false,
    }),
    new CleanWebpackPlugin()
  ]
};