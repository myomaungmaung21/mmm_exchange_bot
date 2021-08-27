"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing from thirdparty
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var userSchema = new mongoose_1.Schema({
    local: {
        username: String,
        email: {
            type: String,
            unique: true,
            index: true,
            sparse: true,
            lowercase: true,
            trim: true
        },
        password: String,
        emailVerified: { type: Boolean, default: false }
    },
    facebook: {
        id: { type: String, unique: true, index: true, sparse: true },
        token: String,
        email: { type: String, unique: true },
        name: String
    }
}, { timestamps: true });
userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('local.password')) {
        bcrypt_1.default.genSalt(12, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt_1.default.hash(user.local.password, salt, function (error, hash) {
                if (error) {
                    return next(error);
                }
                user.local.password = hash;
                return next();
            });
        });
    }
});
userSchema.method('comparePassword', function (candidatePassword, next) {
    var user = this;
    bcrypt_1.default.compare(candidatePassword, user.local.password, function (err, _same) {
        if (err)
            next(err);
        return next();
    });
});
exports.default = mongoose_1.model('user', userSchema);
//# sourceMappingURL=user.js.map