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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    static: { directory: path.resolve(__dirname, 'public') },
    devMiddleware: {
      publicPath: '/dist',
    },
  },
};
