import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  clearMocks: true,
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './dist', '.rollup.cache'],
};
export default config;
