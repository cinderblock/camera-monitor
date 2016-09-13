module.exports = {
    entry: './src/client.js',
    output: {
        path: __dirname + '/webpack',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
