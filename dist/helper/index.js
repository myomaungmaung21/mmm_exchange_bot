"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.VerifyToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var VerifyToken = function (token) {
    var decoded_token = jsonwebtoken_1.verify(token, config_1.jwt_secret);
    return decoded_token;
};
exports.VerifyToken = VerifyToken;
var generateToken = function (user) {
    var token = jsonwebtoken_1.sign({ user: user }, config_1.jwt_secret, { expiresIn: '1d' });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=index.js.map