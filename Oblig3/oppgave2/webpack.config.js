const path = require('path');

module.exports = {
    entry: './src/index.js', // where to figure out what dependencies are needed and libraries
    output: {
        path: path.resolve(__dirname, 'public'), // The root directory to store output files in.
        filename: 'bundle.js', // The filename used for generated files.
        publicPath: '/', // What folder (prefix needed) webpack output is served from ex. ./foldername/bundle.js
    },
    devServer: {
        contentBase: './public'
    }
};
