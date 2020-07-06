const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/main.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': ['node_modules']
    }
  },

  devtool: 'eval-cheap-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8081,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: {
              hmr: DEV_MODE,
              reloadAll: true
            }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
}
