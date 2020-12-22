'use strict'
module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/src/app\\.ts',
        '<rootDir>/node_modules/',
    ],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    testTimeout: 5000,
    testEnvironment: 'node',
}
