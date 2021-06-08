const { config } = require("./wdio.shared.conf");

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    exclude: [],
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 12000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '@validateEliminarPropositoHomeBienestar',
        tagsInTitle: false,
        //tags: [''],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        // If you need a logs from appium server, make log equal true.
        log: false,
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },
    hostname: '0.0.0.0',
    path: '/wd/hub/',
    port: 4723,

    // ====================
    // Some hooks
    // ====================

    // This code is responsible for taking the screenshot in case of error and attaching it to the report
    beforeScenario: function (uri, feature, scenario, sourceLocation, context) {
        driver.switchContext(browser.getContexts()[1]);
    },

    afterScenario: function (uri, feature, scenario, sourceLocation, context) {
        driver.reset()
    },
};
