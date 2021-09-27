module.exports = {
  roots: [
    '<rootDir>/packages/dodomeki-ui/src',
    '<rootDir>/packages/dodomeki-ui-chart/src',
    '<rootDir>/packages/dodomeki-ui-hooks/src',
    '<rootDir>/packages/dodomeki-ui-theme/src',
    '<rootDir>/packages/dodomeki-ui-virtualized/src',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};
