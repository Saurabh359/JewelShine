const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/main.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3000,
      historyApiFallback: true,
      hot: true,
      open: false,
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  };
};
