const fs = require('fs')
const path = require('path')
const { SOURCE_DIR } = require('../helpers')
const HTMLWebpackPlugin = require('html-webpack-plugin')


/**
 * Simplifies creation of HTML files.
 * https://github.com/jantimon/html-webpack-plugin
 */
module.exports = fs.readdirSync(SOURCE_DIR).map(templateName => {
  if (!/\.(njk|nunjucks|html)$/i.test(templateName)) return false

  let filename = templateName.split('.')[0]
  filename = filename === 'home' ? 'index' : filename

  return new HTMLWebpackPlugin({
    template: `${ templateName }`,
    filename: `${ filename }.html`,
    chunks: ['common', filename],
    templateParameters: require(path.resolve(SOURCE_DIR, 'data', 'nunjucks.data.js'))
  })
}).filter(Boolean)