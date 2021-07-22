// https://github.com/storybookjs/storybook/issues/9070#issuecomment-635895868
// yarn dev:storybook --debug-webpack

const reactInlineSvg = (config) => {
  // We search the rule defined for `*.svg` files
  const fileRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  )

  // We exclude `*.svg` files from the previous rule
  fileRule.exclude = /\.svg$/

  // We add a our custom rule for `*.svg` files
  config.module.rules.push({
    test: /\.svg$/,
    loader: ['@svgr/webpack'],
  })

  return config
}

module.exports = reactInlineSvg
