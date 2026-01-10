// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  // We search the rule defined for `*.css` files
  const cssRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.css')
  )

  // We exclude `*.module.css` files from the previous rule
  cssRule.exclude = /\.module\.css$/

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
