const esModules = [
  '@glrodasz/storybook-tools-helpers',
  '@glrodasz/storybook-tools-snapshots',
].join('|')

module.exports = {
  collectCoverageFrom: [
    '{atoms,molecules,layout}/**/!(index).js',
    '{hocs,helpers}/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
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
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
}
