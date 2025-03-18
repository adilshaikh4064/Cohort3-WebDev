"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const JWT_SECRET = config_1.config.jwtSecret;
const userMiddleware = function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({
            message: 'Unauthorized: no token provided.'
        });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.userId = decoded.id; // Ensure TypeScript recognizes this property
        next();
    }
    catch (error) {
        res.status(403).json({
            message: "Error occurred while verifying token",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.userMiddleware = userMiddleware;
