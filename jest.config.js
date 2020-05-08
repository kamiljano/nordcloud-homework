'use strict';

module.exports = {
    testMatch: [
        '**/__tests__/**/*test.[jt]s?(x)'
    ],
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: [
        'default',
        ['./node_modules/jest-html-reporter', {
            outputPath: 'testReport.html'
        }]
    ]
};