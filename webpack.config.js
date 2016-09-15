var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'webpack'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx?$/, loader: 'babel', exclude: /[/\\]node_modules[/\\]/ },
            { test: /\.json$/, loader: 'json' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webcam Monitor',
        }),
    ],
    devServer: {
      inline: true,
    },
};
