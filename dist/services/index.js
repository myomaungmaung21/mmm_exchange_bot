"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callSendAPI = void 0;
var request_1 = __importDefault(require("request"));
var config_1 = require("../config");
var callSendAPI = function (sender_psid, response) {
    var request_body = {
        recipient: {
            id: sender_psid
        },
        message: { text: response }
    };
    request_1.default({
        uri: 'https://graph.facebook.com/v7.0/me/messages',
        qs: { access_token: config_1.fb_verified_token },
        method: 'POST',
        json: request_body
    }, function (err, _res, _body) {
        if (!err) {
            console.log("Message sent!");
        }
        else {
            console.log("Unable to send message " + err);
        }
    });
};
exports.callSendAPI = callSendAPI;
//# sourceMappingURL=index.js.map