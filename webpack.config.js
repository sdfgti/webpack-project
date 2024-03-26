const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ],
            },
          ],
        },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
            chunks: ['news'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html',
            filename: 'rozklad.html',
            chunks: ['rozklad'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html',
            chunks: ['photo'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' }
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
    },
};
