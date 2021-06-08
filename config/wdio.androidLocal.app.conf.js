const { join } = require('path');
const { config } = require('./wdio.sharedLocal.conf');

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
        'appium:chromedriverExecutableDir': join(
            process.cwd(),
            './node_modules/appium/node_modules/appium-chromedriver/chromedriver/mac/',
        ),
        'appium:deviceName': 'Pixel_3a_API_30_x86',
        'appium:platformVersion': '30',
        'appium:avd': 'Pixel_3a_API_30_x86',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UIAutomator2',
        // The path to the app
        /* 'appium:app': join(
            process.cwd(), './apps/app-debug.apk'), */
        //'appium:app': './apps/bolivar-conmigo-V126_Prod.apk',
        'appium:app': './apps/bolivar-conmigo-V185.apk',
        //'appium:app': './apps/app-debug-prueba.apk',
        /* './apps/Android-NativeDemoApp-0.2.1.apk', */
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // With these settings the application will not be closed between tests
        'appium:noReset': true,
        'appium:fullReset': false,
        //'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 110,
        'appium:autoWebview': true,
        
    },
];

exports.config = config;
