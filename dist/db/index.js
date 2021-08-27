"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var config_1 = require("../config");
dotenv_1.default.config();
var connectDB = function () {
    try {
        mongoose_1.default
            .connect(config_1.db_url, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(function () {
            console.log("\u23F3DB connected.");
        })
            .catch(function (error) {
            throw error;
        });
    }
    catch (error) {
        console.log("\uD83D\uDC7FDB disconnected with \" " + error.message + " \"");
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=index.js.map