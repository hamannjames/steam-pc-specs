var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        app: [
            './src/server'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            }
        ]
    },

    stats: {
        colors: true
    },

    target: 'node',

    externals: [nodeExternals()]
}
