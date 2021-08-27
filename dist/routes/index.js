"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookRouter = exports.RateRouter = exports.CurrencyRouter = exports.UserRouter = void 0;
var user_1 = __importDefault(require("./user"));
exports.UserRouter = user_1.default;
var currency_1 = __importDefault(require("./currency"));
exports.CurrencyRouter = currency_1.default;
var rate_1 = __importDefault(require("./rate"));
exports.RateRouter = rate_1.default;
var webhook_1 = __importDefault(require("./webhook"));
exports.WebHookRouter = webhook_1.default;
//# sourceMappingURL=index.js.map