// jest.config.js
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!chalk)',
  ],
  testEnvironment: 'node',
}
