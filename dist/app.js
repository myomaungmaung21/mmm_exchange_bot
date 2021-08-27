"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing from third_party
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var express_favicon_1 = __importDefault(require("express-favicon"));
//importing from db
var db_1 = require("./db");
//importing from config
var config_1 = require("./config");
var routes_1 = require("./routes");
var errorhandler_1 = require("./errorhandler");
var app = express_1.default();
app.use(cors_1.default());
app.use('', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use(express_favicon_1.default(path_1.default.join(__dirname, '..', 'public/favicon.ico')));
app.use(express_1.default.json());
var startApp = function () {
    db_1.connectDB();
    app.listen(config_1.server_port, function () {
        console.log("\uD83C\uDF00Server is running at port " + config_1.server_port);
    });
    app.use('/webhook', routes_1.WebHookRouter);
    app.use('/api/user', routes_1.UserRouter);
    app.use('/api/currency', routes_1.CurrencyRouter);
    app.use('/api/rate', routes_1.RateRouter);
    app.use(errorhandler_1.errorHandler);
};
startApp();
//# sourceMappingURL=app.js.map