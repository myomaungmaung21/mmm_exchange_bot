"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostBack = exports.handleMessage = void 0;
var query_1 = require("../helper/query");
var services_1 = require("../services");
var handleMessage = function (sender_psid, message) {
    if (message && message.text) {
        var result = query_1.getHookRates(message.text);
        if (result && result.length > 0) {
            result.forEach(function (r) {
                services_1.callSendAPI(sender_psid, "1" + r.from_currency + "\uD83D\uDD04" + r.to_currency + "\uD83D\uDD34" + r.sell + "\uD83D\uDD35" + r.buy);
            });
        }
        else {
            services_1.callSendAPI(sender_psid, "\uD83D\uDC4BHi there,type here \"USD\" or \"SGD\" or \"EUR\" etc...");
        }
    }
    else {
        services_1.callSendAPI(sender_psid, "\uD83D\uDC4BHi there,type here \"USD\" or \"SGD\" or \"EUR\" etc...");
    }
};
exports.handleMessage = handleMessage;
var handlePostBack = function (sender_psid, rec_postback) {
    var data = query_1.getHookRates(rec_postback.payload);
    if (data) {
        if (data && data.length > 0) {
            data.forEach(function (r) {
                services_1.callSendAPI(sender_psid, "1" + r.from_currency + "\uD83D\uDD04" + r.to_currency + "\uD83D\uDD34" + r.sell + "\uD83D\uDD35" + r.buy);
            });
        }
        else {
            services_1.callSendAPI(sender_psid, "\uD83D\uDC4BHi there,type here \"USD\" or \"SGD\" or \"EUR\" etc...");
        }
    }
    else {
        services_1.callSendAPI(sender_psid, "\uD83D\uDC4BHi there,type here \"USD\" or \"SGD\" or \"EUR\" etc...");
    }
};
exports.handlePostBack = handlePostBack;
//# sourceMappingURL=index.js.map