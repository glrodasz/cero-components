// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  // Find all CSS-related rules and exclude .module.css from them
  config.module.rules.forEach((rule) => {
    if (rule.test && rule.test.toString().includes('css')) {
      // Exclude .module.css files from this rule
      if (rule.exclude) {
        // If exclude already exists, make it an array and add our exclusion
        rule.exclude = Array.isArray(rule.exclude)
          ? [...rule.exclude, /\.module\.css$/]
          : [rule.exclude, /\.module\.css$/]
      } else {
        rule.exclude = /\.module\.css$/
      }
    }

    // Handle oneOf pattern (Storybook may use this)
    if (rule.oneOf) {
      rule.oneOf.forEach((oneOfRule) => {
        if (oneOfRule.test && oneOfRule.test.toString().includes('css')) {
          if (oneOfRule.exclude) {
            oneOfRule.exclude = Array.isArray(oneOfRule.exclude)
              ? [...oneOfRule.exclude, /\.module\.css$/]
              : [oneOfRule.exclude, /\.module\.css$/]
          } else {
            oneOfRule.exclude = /\.module\.css$/
          }
        }
      })
    }
  })

  // Add CSS Modules rule
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
            namedExport: false,
            exportLocalsConvention: 'as-is',
          },
          importLoaders: 0,
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
