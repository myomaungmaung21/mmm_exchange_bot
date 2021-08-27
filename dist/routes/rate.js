"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var rate_1 = require("../controllers/rate");
var authenticated_1 = require("../middleware/authenticated");
var router = express_1.Router();
//rates
router.get('/', rate_1.rates);
// add rate
router.post('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('from_currency').notEmpty().withMessage('From currency must not be empty'),
    express_validator_1.body('to_currency').notEmpty().withMessage('To currency must not be empty'),
    express_validator_1.body('sell').notEmpty().isNumeric(),
    express_validator_1.body('buy').notEmpty().isNumeric()
], rate_1.addRate);
// update rate
router.put('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('from_currency').notEmpty().withMessage('From currency must not be empty'),
    express_validator_1.body('to_currency').notEmpty().withMessage('To currency must not be empty'),
    express_validator_1.body('sell').notEmpty().isNumeric(),
    express_validator_1.body('buy').notEmpty().isNumeric(),
    express_validator_1.body('id').notEmpty().withMessage('Rate Id must not be empty')
], rate_1.updateRate);
//delete rate
router.delete('/', authenticated_1.isAuthenticated, [
    express_validator_1.body('id').notEmpty().withMessage('Rate Id must not be empty')
], rate_1.deleteRate);
exports.default = router;
//# sourceMappingURL=rate.js.map