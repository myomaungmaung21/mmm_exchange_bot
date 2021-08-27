"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../controllers/user");
var express_validator_1 = require("express-validator");
var models_1 = require("../models");
var router = express_1.Router();
// signin
router.post('/login', [
    express_validator_1.body('email').notEmpty().trim().isEmail().normalizeEmail().custom(function (val) {
        return models_1.User.findOne({ "local.email": val }).then(function (user) {
            if (!user) {
                return Promise.reject("User email doesn't exist!");
            }
            else {
                return Promise.resolve();
            }
        });
    }),
    express_validator_1.body('password').notEmpty().isStrongPassword()
], user_1.signinUser);
// signup
router.post('/signup', [
    express_validator_1.body('email').notEmpty().trim().isEmail().normalizeEmail().custom(function (val) {
        return models_1.User.findOne({ email: val }).then(function (user) {
            if (user) {
                return Promise.reject("User email already used!");
            }
            else {
                return Promise.resolve();
            }
        });
    }),
    express_validator_1.body('password').notEmpty().isStrongPassword(),
    express_validator_1.body('username').notEmpty().withMessage("Username must not be empty!")
], user_1.signupUser);
exports.default = router;
//# sourceMappingURL=user.js.map