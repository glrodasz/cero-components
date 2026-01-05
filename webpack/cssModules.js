// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  // Remove or modify existing CSS rules to avoid conflicts
  config.module.rules = config.module.rules.map(rule => {
    // Find rules that match .css files
    if (rule.test && rule.test.toString().includes('.css')) {
      // Modify the rule to exclude .module.css files
      return {
        ...rule,
        exclude: /\.module\.css$/
      }
    }
    return rule
  })

  // Add rule for CSS modules - insert at beginning for priority
  config.module.rules.unshift({
    test: /\.module\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
          importLoaders: 1,
          sourceMap: true,
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
