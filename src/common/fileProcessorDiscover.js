'use strict';

const env = require('./environmentVariables');
const tools = require('./constants');
const fs = require('fs');

function loadFromFile(fileName) {
    console.log("Loading data from " + fileName + "...");
    let data = fs.readFileSync(fileName);
    let dataObject = JSON.parse(data);
    console.log("Data from " + fileName + " loaded");
    return dataObject;
}

function getAPIKey() {
    const expectedStackName = env.AWS_APP_NAME + "-" + env.AWS_ENV + "-stack-TradeInModule";
    if (env.APIKEY) return env.APIKEY;
    else if (env.APIKEYS_OUTPUT_ENABLED === "true") {
        let apikeysData = loadFromFile(tools.APIKEYS_OUTPUT_FILE);
        if (apikeysData) {
            for (const item of apikeysData.items) {
                if (item.name.startsWith(expectedStackName)) return item.value;
            }
        }
    }
    throw new Error("APIKey is not configured. Be sure you have environment variables either APIKEY or APIKEYS_OUTPUT_ENABLED");
}

function getServiceUrl() {
    const expectedApigatewayName = env.AWS_APP_NAME + "-" + env.AWS_ENV + "-" +env.AWS_ENV2;
    if (env.SERVICE_URL) return env.SERVICE_URL;
    else if (env.APIGATEWAY_OUTPUT_ENABLED === "true") {
        let apigatewayData = loadFromFile(tools.APIGATEGAY_OUTPUT_FILE);
        if (apigatewayData) {
            for (const api of apigatewayData.items) {
                if (api.name === expectedApigatewayName) {
                    return `https://${api.id}.execute-api.${tools.REGION}.amazonaws.com/${env.AWS_ENV}`
                }
            }
        }
    }
    throw new Error("Service URL is not configured. Be sure you have environment variables either SERVICE_URL or STACKS_OUTPUT_ENABLED");
}


exports.getAPIKey = getAPIKey;
exports.getServiceUrl = getServiceUrl;
