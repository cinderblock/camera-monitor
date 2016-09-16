var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rsep = path.sep.replace(/\\/, '\\\\');

const node_modules = new RegExp(`^${__dirname.replace(/\\/g, '\\\\')}${rsep}node_modules${rsep}`);

module.exports = {
    entry: [
      'bootstrap-loader',
      './src/client.jsx',
    ],
    output: {
        path: path.join(__dirname, 'webpack'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx?$/, loader: 'babel', exclude: node_modules },
            { test: /\.json$/, loader: 'json' },
            { test: /\.pug$/, loader: 'pug' },
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webcam Monitor',
            template: './src/index.pug',
        }),
    ],
    devtool: 'eval-source-map',
    devServer: {
      inline: true,
    },
};
