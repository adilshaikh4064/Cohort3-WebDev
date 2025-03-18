"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: (_a = Number(process.env.PORT)) !== null && _a !== void 0 ? _a : 3000,
    dbName: (_b = process.env.DATABASE_NAME) !== null && _b !== void 0 ? _b : "",
    mongodbUrl: (_c = process.env.MONGODB_URL) !== null && _c !== void 0 ? _c : "",
    saltRounds: (_d = Number(process.env.SALT_ROUNDS)) !== null && _d !== void 0 ? _d : 10,
    jwtSecret: (_e = process.env.JWT_SECRET) !== null && _e !== void 0 ? _e : "",
};
