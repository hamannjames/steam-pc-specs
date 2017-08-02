var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/App.js',

    output: {
        path: path.resolve(__dirname, './bin/www/js'),
        filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    'presets': ['es2015']
                }
            }
        ]
    },

    stats: {
        colors: true
    },

    devtool: 'source-map'
}
