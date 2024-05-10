import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@exceptions/(.*)': '<rootDir>/src/exceptions/$1',
    '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@providers/(.*)': '<rootDir>/src/providers/$1',
    '@repositories/(.*)': '<rootDir>/src/repositories/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@schemas/(.*)': '<rootDir>/src/schemas/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@main': '<rootDir>/src/main.ts',
    '@envs': '<rootDir>/src/envs.ts',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/providers/celCash/subAccount.celCash.provider.spec.ts',
  ],
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

export default config;
