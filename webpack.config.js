const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const src = path.join(__dirname, 'src');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[hash:8].js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            assets: path.join(src, 'assets'),
            components: path.join(src, 'components'),
            managers: path.join(src, 'managers'),
            store: path.join(src, 'store'),
        },
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ttf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            template: './src/index.html',
            filename: path.join(__dirname, '/dist/index.html'),
            favicon: path.join(__dirname, '/favicon.ico'),
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        publicPath: '/',
        contentBase: '/',
        hot: true,
        port: 8080,
        historyApiFallback: true,
    },
    optimization: {
        minimize: true,
    },
};