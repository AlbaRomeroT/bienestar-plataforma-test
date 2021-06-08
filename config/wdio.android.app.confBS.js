const { join } = require('path');
const { config } = require('./wdio.shared.conf');

exports.config = {
    updateJob: false,
    exclude: [],
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

};

// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Samsung Galaxy S21',
    os_version: "11.0",
    app : 'bs://de7808c9d8fab4dfcdfd4260a22be734a70246b8',//'bs://f7a94c6fa00ebf1025294061e4dc27c601cbb1f4',
    'browserstack.debug': true
},
];

exports.config = config;
