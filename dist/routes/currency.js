"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var currency_1 = require("../controllers/currency");
var authenticated_1 = require("../middleware/authenticated");
var router = express_1.Router();
// currencies 
router.get('/', currency_1.currencies);
// add currency
router.post('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('name').notEmpty().isUppercase(),
    express_validator_1.body('keyword').notEmpty().isLowercase()
], currency_1.addCurrency);
// update currency
router.put('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('name').notEmpty().isUppercase(),
    express_validator_1.body('keyword').notEmpty().isLowercase(),
    express_validator_1.body('id').notEmpty().withMessage('Curreny Id must not be empty')
], currency_1.updateCurrency);
//delete currency
router.delete('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('id').notEmpty().withMessage('Curreny Id must not be empty')
], currency_1.deleteCurrency);
exports.default = router;
//# sourceMappingURL=currency.js.map