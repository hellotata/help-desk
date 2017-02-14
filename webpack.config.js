const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'client/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?{"presets":["es2015","react"]}']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
  ],
}

