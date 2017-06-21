var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var ENTRY_PATH = path.resolve(__dirname, 'app/main.js');
var OUT_PATH = path.resolve(__dirname, 'dist');
module.exports = {
  entry: [
    ENTRY_PATH  //代表入口(总)文件，可以写多个
  ],
  output: {
    path: OUT_PATH,//输出文件夹
    filename: 'index.js'//最终打包生成的文件名
  },
  watch: true,
  devServer: {
    contentBase: './dist',
    port: 7090
  },
  module: {
    loaders: [
    //   {
    //     test: require.resolve('dist/common/jQuery.min.js'),
    //     loader: 'expose?jQuery!expose?$'
    //  },
      {
        test: path.join(__dirname, 'yinxiao'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'css-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options:{
          name:'/adsys/images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('home.min.css')
    // new ExtractTextPlugin('home.min.css',{allChunks: true})
  ]
};
