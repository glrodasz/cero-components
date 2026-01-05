// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  // Find the rule for .css files
  const cssRuleIndex = config.module.rules.findIndex(
    (rule) => rule.test && rule.test.toString().includes('.css')
  )

  if (cssRuleIndex !== -1) {
    const cssRule = config.module.rules[cssRuleIndex]

    // Exclude .module.css files from the standard CSS rule
    cssRule.exclude = /\.module\.css$/
  }

  // Add custom rule for .module.css files
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
          importLoaders: 1,
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
