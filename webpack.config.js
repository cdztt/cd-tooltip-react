const path = require('path')

module.exports = {
    mode: 'production',
    entry: './js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: 'umd'
        },
        globalObject: 'this'
    },
    externals: {
        react: 'react'
    },
    resolve: {
        alias: {
            './index.css': '../src/index.css'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            { runtime: 'automatic' }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
}
