const loadConfigs = require('../webpack/loadConfigs')

const cssModules = require('../webpack/cssModules')
const reactInlineSvg = require('../webpack/reactInlineSvg')

module.exports = {
  stories: ['../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: loadConfigs([cssModules, reactInlineSvg]),
  framework: '@storybook/react',
  features: {
    storyStoreV7: true
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true
      },
    },
  },
}
