const path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const entryPointNames = ['main', 'popup', 'background'];

const excludeChunkNames = ['background'];

module.exports = () => {
  return {
    devServer: {
      contentBase: './src',
      historyApiFallback: true
    },
    entry: {
      main: ['./src/entry-points/main/main.js'],
      popup: ['./src/entry-points/popup/popup.js'],
      background: ['./src/extension-scripts/background/background.ts'],
      contentScripts: ['./src/extension-scripts/content/ping.ts'],
    },
    output: {
      filename: (pathData) => {
        const isEntryPoint = !!entryPointNames.find((name) => name === pathData.chunk.name);

        return (isEntryPoint) ? '[name].bundle.js' : '[name].[contenthash].bundle.js';
      },
      path: path.resolve(__dirname, 'dist'),
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  noEmit: false,
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  {
                    'plugins': ['@babel/plugin-proposal-class-properties']
                  }
                ]
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(png|jpg)$/,
          type: 'asset/resource'
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer',
                      {}
                    ],
                  ],
                },
              },
            },
            'sass-loader'
          ],
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "autoprefixer",
                      {}
                    ],
                  ],
                },
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'main.html',
        template: 'src/entry-points/main/main.html',
        chunks: ['main']
      }),
      new HtmlWebpackPlugin({
        filename: 'popup.html',
        template: 'src/entry-points/popup/popup.html',
        chunks: ['popup']
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'manifest.json', to: '[name][ext]' }]
      }),
      new CheckerPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new CleanWebpackPlugin(),
      new Dotenv({
        path: '.env',
        safe: true
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks (chunk) {
          return !(!!excludeChunkNames.find((name) => name === chunk.name));
        }
      },
    }
  };
};
