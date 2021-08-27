"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWebHook = exports.getWebHook = void 0;
var config_1 = require("../config");
var processes_1 = require("../processes");
var getWebHook = function (req, res, next) {
    try {
        if (req.query['hub.verify_token'] === config_1.fb_verified_token) {
            console.log('webhook verified');
            res.status(200).send(req.query['hub.challenge']);
        }
        else {
            var error = new Error("Token mismatch!");
            error.statusCode = 422;
            throw error;
        }
    }
    catch (error) {
        if (!error.statusCode) {
            next(error);
        }
    }
};
exports.getWebHook = getWebHook;
var postWebHook = function (req, res, next) {
    try {
        if (req.body.object === 'page') {
            req.body.entry.forEach(function (entry) {
                var web_hook_event = entry.messaging[0];
                console.log(web_hook_event);
                var sender_psid = web_hook_event.sender.id;
                console.log("\uD83D\uDC66Facebook_User_ID " + sender_psid);
                if (web_hook_event.message) {
                    processes_1.handleMessage(sender_psid, web_hook_event.message);
                }
                else if (web_hook_event.postback) {
                    processes_1.handlePostBack(sender_psid, web_hook_event.postback);
                }
            });
            res.status(200).send("\uD83D\uDC4D Event receieved!");
        }
    }
    catch (error) {
        next(error);
    }
};
exports.postWebHook = postWebHook;
//# sourceMappingURL=webhook.js.map