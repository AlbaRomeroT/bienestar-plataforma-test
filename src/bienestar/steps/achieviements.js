'use strict';

const pactum = require('pactum');
const {Given, When, Then, BeforeAll, Before, After} = require('@cucumber/cucumber');
const outputProcessor = require('../../common/fileProcessorDiscover');
const util = require('../utils/bienestarUtilities');

let spec = pactum.spec();
let serviceUrl;
let apiKey;

let request = {};
