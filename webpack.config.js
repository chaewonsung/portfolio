const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@use "@styles/common/variables" as *;',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            type: 'asset/resource',
            resourceQuery: /url/,
            generator: {
              filename: 'images/[name][ext]',
            },
          },
          {
            use: ['@svgr/webpack'],
          },
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@images': path.resolve(__dirname, './src/images/'),
      '@textSvg': path.resolve(__dirname, './src/images/text-svg/'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  devServer: {
    static: './public',
    open: true,
    hot: true,
  },
};
