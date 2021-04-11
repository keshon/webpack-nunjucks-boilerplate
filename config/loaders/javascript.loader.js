/**
 * Transpils JavaScript files using Babel.
 * https://github.com/babel/babel-loader
 */
module.exports = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', { 'modules': false, 'loose': true }]
      ],
      plugins: [  ]
    }
  }
}
