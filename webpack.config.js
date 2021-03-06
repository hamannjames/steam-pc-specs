var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/App.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    'presets': ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },

    target: 'web'
}
