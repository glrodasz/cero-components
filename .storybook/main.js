const cssModules = require('../config/cssModules')

module.exports = {
  stories: ['../(layout|atoms|molecules)/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: cssModules(),
}
