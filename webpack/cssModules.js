// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// yarn dev:storybook --debug-webpack

const cssModules = (config) => {
  // Insert CSS Modules rule at the beginning for priority
  // This rule will match first due to being at index 0
  config.module.rules.unshift({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
            exportLocalsConvention: 'camelCase',
          },
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
