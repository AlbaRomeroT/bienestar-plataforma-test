'use strict';

module.exports.initializeQuoteItems = function initializeQuoteItems (request,itemIndex){
    let realItemIndex = itemIndex - 1;
    if (!request.quote.items) {
        request.quote.items = [];
    }
    if (!request.quote.items[realItemIndex]) {
        request.quote.items[realItemIndex] = {};
    }
}