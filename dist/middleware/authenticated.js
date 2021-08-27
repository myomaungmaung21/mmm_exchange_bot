"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var helper_1 = require("../helper");
var isAuthenticated = function (req, _res, next) {
    try {
        var auth_header = req.get('Authorization');
        if (auth_header) {
            var token = auth_header.split(' ')[1];
            var decoded_token = helper_1.VerifyToken(token);
            if (decoded_token) {
                req.user_id = decoded_token.user._id;
                next();
            }
            else {
                var error = new Error('Unauthorized User!');
                error.statusCode = 401;
                throw error;
            }
        }
        else {
            var error = new Error('Unauthorized User!');
            error.statusCode = 401;
            throw error;
        }
    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=authenticated.js.map