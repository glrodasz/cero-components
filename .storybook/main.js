const loadConfigs = require('../webpack/loadConfigs')

const cssModules = require('../webpack/cssModules')
const reactInlineSvg = require('../webpack/reactInlineSvg')

module.exports = {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    // Apply custom webpack configurations
    config = loadConfigs([cssModules, reactInlineSvg])(config)

    // Force all packages to use the same React version (React 19)
    // This fixes "multiple copies of React" error from dependencies bundling older React
    const path = require('path')
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, '../node_modules/react/jsx-runtime'),
    }

    return config
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true
      }
    }
  },
  docs: {
    autodocs: true,
  }
}
