"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const config_1 = require("./config");
const db_1 = require("./db");
const app = (0, express_1.default)();
(0, db_1.dbConnect)();
const PORT = config_1.config.port;
app.use(express_1.default.json());
app.use('/api/v1/user/', router_1.userRouter);
app.use('/api/v1/content/', router_1.contentRouter);
app.use('/api/v1/brain/', router_1.brainRouter);
app.listen((PORT), function () {
    console.log(`Brainly app is listening on port number: ${PORT}`);
});
