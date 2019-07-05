var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/scripts/main.js',
        a: './src/scripts/a.js',
        b: './src/scripts/b.js',
        c: './src/scripts/c.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://www.baidu.com'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is a.html',
            // chunks: ['main', 'a']
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is b.html',
            // chunks: ['main', 'b']
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is c.html',
            // chunks: ['main', 'c']
            excludeChunks: ['a', 'b']
        })
    ]
};
