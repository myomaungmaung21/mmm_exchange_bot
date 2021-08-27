"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fb_verified_token = exports.fb_page_token = exports.jwt_secret = exports.db_url = exports.server_port = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.config();
var server_port = process.env.PORT || 4000;
exports.server_port = server_port;
var db_url = process.env.MONGODB_URL || '';
exports.db_url = db_url;
var jwt_secret = process.env.JWT_SECRET || 'my_jwt_secret';
exports.jwt_secret = jwt_secret;
var fb_page_token = process.env.FB_PAGE_TOKEN || '';
exports.fb_page_token = fb_page_token;
var fb_verified_token = process.env.VERIFY_TOKEN || '';
exports.fb_verified_token = fb_verified_token;
//# sourceMappingURL=index.js.map