"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var webhook_1 = require("../controllers/webhook");
var router = express_1.Router();
router.get('/', webhook_1.getWebHook);
router.post('/', webhook_1.postWebHook);
exports.default = router;
//# sourceMappingURL=webhook.js.map