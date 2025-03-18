"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.get('/signup', (req, res) => {
    res.json({
        message: 'signup end point hits successfully.'
    });
});
exports.default = userRouter;
