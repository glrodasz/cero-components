// When transformInorePatterns is used, transform needs to be
// explicitly defined for the files that need to be transformed
const babelPresets = require('./.babelrc.json').presets

// FIXME: Migrate this to CommonJS
const esModules = [
  '@glrodasz/storybook-tools-styles',
  '@glrodasz/storybook-tools-helpers',
].join('|')

module.exports = {
  collectCoverageFrom: [
    '{atoms,molecules,layout}/**/!(index).js',
    '{hocs,helpers}/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 55,
      lines: 60,
      statements: 60,
    },
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/utils/testUtils/svgrMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { presets: babelPresets }],
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
}
