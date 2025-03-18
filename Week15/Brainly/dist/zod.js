"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSchemaZod = exports.UserSchemaZod = void 0;
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("./config");
const db_1 = require("./db");
const SALT_ROUNDS = config_1.config.saltRounds;
exports.UserSchemaZod = zod_1.z.object({
    username: zod_1.z.string().min(5, { message: "username must have atleast 5 characters." }),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, { message: "password must have atleast 8 characters." }),
    name: zod_1.z.string().min(3, { message: "name must have atleast 3 characters." })
})
    .transform(({ username, email, password, name }) => ({
    username,
    email: email.toLowerCase(), // ✅ Sync transformation (valid)
    password,
    name,
}))
    .superRefine(function (_a, ctx_1) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password, name }, ctx) {
        const foundUser = yield db_1.UserModel.findOne({ username });
        if (foundUser) {
            ctx.addIssue({
                code: 'custom',
                path: ['username'],
                message: 'username already exists'
            });
        }
    });
})
    .transform(function (_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password, name }) {
        const hashPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        return {
            email,
            username,
            password: hashPassword,
            name
        };
    });
});
exports.ContentSchemaZod = zod_1.z.object({
    type: zod_1.z.enum(['document', 'tweet', 'youtube', 'link'], { message: 'type must be the valid' }),
    title: zod_1.z.string(),
    link: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
