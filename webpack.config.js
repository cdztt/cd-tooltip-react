/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? false : 'inline-source-map',
  entry: './js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'umd',
    },
    globalObject: 'this',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
