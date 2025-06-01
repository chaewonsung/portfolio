const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_, argv) => {
  const isDev = argv.mode === 'development';

  const plugins = [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new webpack.EnvironmentPlugin({ MODE: isDev ? 'dev' : 'prod' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ];

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
      })
    );
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      clean: true,
      publicPath: isDev ? '/' : '/portfolio/',
      assetModuleFilename: 'images/[name].[contenthash:8][ext]',
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
          test: /\.(sa|sc|c)ss$/i,
          exclude: /node_modules/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              type: 'asset/resource',
              resourceQuery: /url/,
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
    plugins,
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@images': path.resolve(__dirname, 'src/images/'),
        '@textSvg': path.resolve(__dirname, 'src/images/text-svg/'),
      },
      extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    devServer: {
      static: './public',
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
