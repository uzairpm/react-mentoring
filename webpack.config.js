var path = require('path');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1.0'),
            'process.env.NODE_ENV': JSON.stringify('"production"')
        }),
        new UglifyJSPlugin()
        /* new CompressionPlugin({
            algorithm: 'gzip'
        }) */
    ],
    devServer: {
        contentBase: './dist',
        port: 3000
    }
};
