var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client.js',
    output: {
        path: __dirname + '/webpack',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx?$/, loader: 'babel'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webcam Monitor',
        }),
    ],
};
