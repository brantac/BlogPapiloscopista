const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {main: './index.js'},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

module.exports = config;