const loadConfigs = (configs) => (storybookConfig) => {
  configs.forEach((config) => config(storybookConfig))
  return storybookConfig
}

module.exports = loadConfigs
