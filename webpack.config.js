const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './index.js', 
        index1: './src/directory_scss/index1.scss', 
        news: './src/directory_scss/news.scss',
        photo: './src/directory_scss/photo/photo.scss',
        rozklad: './src/directory_scss/rozklad/rozklad.scss'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
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
        new MiniCssExtractPlugin({
            filename: '[name].css', 
        }),
    ],
};
