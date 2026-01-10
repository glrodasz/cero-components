// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  const cssRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.css')
  )

  cssRule.exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: 'as-is',
          }
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
