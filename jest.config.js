module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 16,
      branches: 6,
      functions: 20,
      lines: 16
    }
  }
}
