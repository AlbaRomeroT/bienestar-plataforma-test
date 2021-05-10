const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        /* 'appium:chromedriverExecutableDir': join(
            process.cwd(),
            './node_modules/appium/node_modules/appium-chromedriver/chromedriver/mac/',
        ), */
        'appium:deviceName': 'Samsung Galaxy S10',
        'appium:platformVersion': '29',
        'appium:avd': 'samsung_galaxy_s10_10.0',
        /* 'appium:deviceName': 'Pixel_2_XL_API_27',
        'appium:platformVersion': '27',
        'appium:avd': 'Pixel_2_XL_API_27', */
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UIAutomator2',
        // The path to the app
        /* 'appium:app': join(
            process.cwd(), './apps/jelpit-conjuntosTest.apk'), */
        'appium:app': '/root/app-debug.apk',
        /* './apps/Android-NativeDemoApp-0.2.1.apk', */
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // With these settings the application will not be closed between tests
        /* 'appium:noReset': false,
        'appium:fullReset': true, */
        /* 'appium:dontStopAppOnReset': true, */
        'appium:newCommandTimeout': 60,
        'appium:autoWebview': true,
    },
];

exports.config = config;
