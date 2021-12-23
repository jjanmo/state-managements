const path = require('path');

module.exports = {
  name: 'redux-toolkit-tutorials',
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
