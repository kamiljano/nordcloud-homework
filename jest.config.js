'use strict';

module.exports = {
    testMatch: [
        "**/__tests__/**/*test.[jt]s?(x)"
    ],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "outputPath": "testReport.html"
        }]
    ]
};