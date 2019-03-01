const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      common: path.resolve(__dirname, './src/common/'),
      components: path.resolve(__dirname, './src/components/'),
      utils: path.resolve(__dirname, './src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true
            },
          },
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Playhouse',
      chunks: ['vendor', 'main'],
      template: '../public/index.hbs'
    })
  ],
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }
};
