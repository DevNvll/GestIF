const webpack = require('webpack')
const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      '~components': path.resolve(__dirname, 'src/client/components/'),
      '~layouts': path.resolve(__dirname, 'src/client/layouts/'),
      '~utils': path.resolve(__dirname, 'src/client/utils/')
    }
    return config
  }
}
