// import webpack from 'webpack';
// import path, {dirname} from 'path';
const path = require('path');
// import { fileURLToPath } from 'url'; 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'; 
// const __dirname = dirname(fileURLToPath(import.meta.url));


//changed const config = to module.exports as apparently config does not work.
module.exports = {
  // entry: ['./client/index.js'],
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    // possibility to use this code for utilizing jpg and png
    // {
    //  test: /\.(jpg|png)$/,
    //   use: {
    //     loader: 'url-loader',
    //    },
    //  },
    // what does the options key do here?
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader',
          options: {mimetype: 'image/png'}
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },      
  devServer: {
    static: {
      directory: './dist',
    },
    proxy: {'/': 'http://localhost:3000/'}
  },
  plugins: [
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false,
    // }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'client/index.html'
    })
  ],
};



// rules: [
//   {
//     test: /\.(js|jsx)$/,
//     use: 'babel-loader',
//     exclude: /node_modules/,
//   },
//   // implement scss and combine all loaders - download scss loader - take out postcss-loader
//   {
//     test: /\.css$/,
//     use: [
//       'style-loader',
//       {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 1,
//         },
//       },
//       'postcss-loader',
//     ],
//     exclude: /\.module\.css$/,
//   },
//   {
//     test: /\.css$/,
//     use: [
//       'style-loader',
//       {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 1,
//           modules: true,
//         },
//       },
//       'postcss-loader',
//     ],
//     include: /\.module\.css$/,
//   },
