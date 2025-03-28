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
exports.brainRouter = exports.contentRouter = exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("./zod");
const db_1 = require("./db");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const util_1 = require("./util");
const SALT_ROUNDS = config_1.config.saltRounds;
const JWT_SECRET = config_1.config.jwtSecret;
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const contentRouter = express_1.default.Router();
exports.contentRouter = contentRouter;
const brainRouter = express_1.default.Router();
exports.brainRouter = brainRouter;
userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield zod_1.UserSchemaZod.safeParseAsync(req.body);
        if (!result.success) {
            res.status(400).json({
                message: 'input/inputs is/are not valid.',
                error: result.error.format()
            });
        }
        const user = result.data;
        yield db_1.UserModel.create(user);
        res.status(200).json({
            message: 'you are signed up successfully.'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while registering the user.',
            error: error
        });
    }
}));
userRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: 'input(s) is/are invalid'
            });
        }
        const userFound = yield db_1.UserModel.findOne({ email });
        if (!userFound) {
            res.status(403).json({
                message: 'user email is not registered.'
            });
        }
        const isPassowrdCorrect = yield bcrypt_1.default.compare(password, userFound.password);
        if (!isPassowrdCorrect) {
            res.status(403).json({
                message: 'Password does not match.'
            });
        }
        const jwtToken = jsonwebtoken_1.default.sign({
            id: userFound._id
        }, JWT_SECRET, {
            expiresIn: '1h'
        });
        res.set('Authorization', `Bearer ${jwtToken}`);
        res.status(200).json({
            message: 'login successfull.',
            jwtToken
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while signing the user in.',
            error: error
        });
    }
}));
contentRouter.post('/', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield zod_1.ContentSchemaZod.safeParseAsync(req.body);
        if (!result.success) {
            res.status(400).json({
                message: 'invalid inputs',
                Error: result.error.format()
            });
            return;
        }
        const content = result.data;
        const { type, title, link, tags } = content;
        let tagIds = [];
        if (tags && tags.length > 0) {
            for (let tagName of tags) {
                let tag = yield db_1.TagModel.findOneAndUpdate({ tagName }, { tagName }, { upsert: true, new: true });
                tagIds.push(tag._id);
            }
        }
        const newContent = new db_1.ContentModel({
            type,
            title,
            link,
            tags: tagIds,
            userId: req.userId,
            shareableId: null
        });
        yield newContent.save();
        res.status(200).json({
            message: 'content added'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while adding content to the database.',
            Error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
contentRouter.get('/', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contents = yield db_1.ContentModel.find({ userId: req.userId })
            .populate('tags').populate('userId');
        res.status(200).json({
            contents
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'error while fetching contents from database.',
            Error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
contentRouter.delete('/', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contentId = req.body.contentId;
        const result = yield db_1.ContentModel.deleteMany({
            _id: new mongoose_1.default.mongo.BSON.ObjectId(contentId),
            userId: req.userId
        });
        res.status(200).json({
            message: 'content deleted',
            result
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while deleting content.',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
brainRouter.post('/share', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { share } = req.body;
        const hash = (0, util_1.generateUniqueHash)(12);
        if (share) {
            yield db_1.LinkModel.create({
                userId: req.userId,
                hash
            });
        }
        else {
            yield db_1.LinkModel.deleteOne({
                userId: req.userId
            });
        }
        res.status(200).json({
            message: 'sharable hash generated',
            shareLink: hash
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while creating sharable link.',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
brainRouter.get('/:sharelink', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sharelink } = req.params;
        const foundLink = yield db_1.LinkModel.findOne({
            hash: sharelink,
        });
        if (!foundLink) {
            res.status(404).json({
                message: 'link expired or not valid',
            });
            return;
        }
        const content = yield db_1.ContentModel.find({ userId: foundLink.userId }).populate('tags');
        if (!content) {
            res.status(404).json({
                message: 'invalid or expired link'
            });
            return;
        }
        res.status(200).json({
            content
        });
        return;
    }
    catch (error) {
        res.status(500).json({
            message: 'server error while fetching the link',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
