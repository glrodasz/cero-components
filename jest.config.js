module.exports = {
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '{atoms,molecules,layout}/**/!(index).js',
    '{hocs,helpers}/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      lines: 60,
      functions: 60,
    },
  },
}
