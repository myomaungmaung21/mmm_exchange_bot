"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (error, _req, res, next) {
    var data = error.data, message = error.message;
    var statusCode = error.statusCode;
    res.status(statusCode).json({ data: data, message: message });
    next();
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.js.map