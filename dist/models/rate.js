"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var rateSchema = new mongoose_1.Schema({
    from_currency: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'currency'
    },
    to_currency: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'currency'
    },
    sell: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose_2.default.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });
exports.default = mongoose_1.model('rate', rateSchema);
//# sourceMappingURL=rate.js.map