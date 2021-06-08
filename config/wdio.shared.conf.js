exports.config = {
    server: 'hub-cloud.browserstack.com',
    user: process.env.BROWSERSTACK_USERNAME || 'alba_987EuF',//'alba_AV6S8F',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'RynyChqXEFZ197umSAut',//'1KT7LVd4ibRrPAAjvAYu',
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
    waitforTimeout: 15000,
    connectionRetryTimeout: 180000,
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
        tagExpression: '@validateRegistroCuenta',
        tagsInTitle: false,
        //tags: [''],
        timeout: 90000,
        ignoreUndefinedDefinitions: false,
    },

    // ====================
    // Appium Configuration
    // ====================
    services: [

        ['browserstack', {   
        browserstackLocal: true    
        }]
        
    ],
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
