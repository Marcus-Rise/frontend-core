module.exports = {
  roots: [
    "<rootDir>/tests/unit",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 30,
      functions: 35,
      lines: 45
    }
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^\\$/(.*)$": "<rootDir>/tests/unit/$1",
  },
  testMatch: [
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/**/*.(js|jsx|ts|tsx)|tests/unit/*.spec.ts)",
  ],
};
