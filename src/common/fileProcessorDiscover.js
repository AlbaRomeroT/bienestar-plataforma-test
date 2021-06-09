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
    const expectedStackName = env.AWS_APP_NAME + "-" + env.AWS_ENV + "-stack";
    if (env.SERVICE_URL) return env.SERVICE_URL;
    // else if (env.STACKS_OUTPUT_ENABLED === "true") {
    //     let stacksData = loadFromFile(tools.STACKS_OUTPUT_FILE);
    //     if (stacksData) {
    //         for (const stack of stacksData.Stacks) {
    //             if (stack.StackName === expectedStackName) {
    //                 for (const output of stack.Outputs) {
    //                     if (output.OutputKey === "InvokeUrl") return output.OutputValue;
    //                 }
    //             }
    //         }
    //     }
    // }
    throw new Error("Service URL is not configured. Be sure you have environment variables either SERVICE_URL or STACKS_OUTPUT_ENABLED");
}


exports.getAPIKey = getAPIKey;
exports.getServiceUrl = getServiceUrl;
