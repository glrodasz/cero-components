const loadConfigs = require('../webpack/loadConfigs')

const cssModules = require('../webpack/cssModules')
const reactInlineSvg = require('../webpack/reactInlineSvg')

module.exports = {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: loadConfigs([cssModules, reactInlineSvg]),
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },
  docs: {}
}
