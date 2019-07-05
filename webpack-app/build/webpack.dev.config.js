var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const config = {
    // context: __dirname,
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'style!css?importLoaders=1!postcss'
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: [
                    'url-loader?limit=20000&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack'
                ]
            }
        ]
    },
    postcss: [require('autoprefixer')({})],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;
