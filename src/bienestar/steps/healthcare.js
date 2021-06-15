'use strict';

const pactum = require('pactum');
const {Given, When, Then, BeforeAll, Before, After} = require('@cucumber/cucumber');
const outputProcessor = require('../../common/fileProcessorDiscover');
const util = require('../utils/bienestarUtilities');

let spec = pactum.spec();
let serviceUrl;
let apiKey;

let request = {};

BeforeAll(() => {
    serviceUrl = outputProcessor.getServiceUrl();
    // apiKey = outputProcessor.getAPIKey();
});

Before(() => {
    spec = pactum.spec();
    spec.withRequestTimeout(15000);
    //Place headers of the request here
    spec.withHeaders("x-bc-wm", "true");
    spec.withHeaders("Content-Type", "application/json");
    
});

Given('A transaction GET event with the path {}', function (path) {
    spec.get(`${serviceUrl}${path}`);
});

Given('A transaction GET with header {string} and : {string}', function (header,contentHeader) {
    spec.withHeaders(header, contentHeader);
});

Given('A quote below:', function (quote) {
    request.quote = JSON.parse(quote);
});

Given('The customer for quote is:', function (customerInfo) {
    if (!request.quote) {
        request.quote = {};
    }
    request.quote.customer = JSON.parse(customerInfo);
});

Given('The quote item #{} is:', function (itemIndex, itemInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1] = JSON.parse(itemInfo);
});

Given('Having the below product questions for item #{}:', function (itemIndex, productQuestionsInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1].product_questions = JSON.parse(productQuestionsInfo);
    
});

Given('Having the below questions for item #{}:', function (itemIndex, questionsInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1].questions = JSON.parse(questionsInfo);
    
});

Given('Having the below model numbers for item #{}:', function (itemIndex, modelNumberInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1].model_number = JSON.parse(modelNumberInfo);
});

Given('Having the below custom attributes for item #{}:', function (itemIndex,customAttributesInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1].custom_attributes = JSON.parse(customAttributesInfo);
});

Given('Having the below product tags for item #{}:', function (itemIndex, productTagsInfo) {
    util.initializeQuoteItems(request,itemIndex);
    request.quote.items[itemIndex - 1].product_tags = JSON.parse(productTagsInfo);
});

When('I send POST request to {}', async function (path) {

    spec.withJson(request);
    spec.post(`${serviceUrl}${path}`);
});

When('I receive a response',{timeout: 10 * 1000}, async function () {
    await spec.toss();
});

Then('I get response code {int}', {timeout: 10 * 1000},async function (code) {
    spec.response().should.have.status(code);
});

Then('I expect response should have a json like', function (json) {
    spec.response().should.have.jsonLike(JSON.parse(json));
});

Then('I expect response should have a json schema', function (schema) {
    console.log("schema: "+schema)
    spec.response().should.have.jsonSchema(JSON.parse(schema));
});

After(() => {
    spec.end();
});
