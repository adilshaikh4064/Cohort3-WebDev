"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.TagModel = exports.ContentModel = exports.UserModel = exports.dbConnect = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const config_1 = require("./config");
const DATABASE_NAME = config_1.config.dbName;
const MONGODB_URL = config_1.config.mongodbUrl;
const dbConnect = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!config_1.config.mongodbUrl)
                throw new Error('MONGODB URL is not defined.');
            if (!config_1.config.dbName)
                throw new Error('DATABASE NAME is not defined.');
            yield mongoose_1.default.connect(`${MONGODB_URL}`);
            console.log('Database connected successfully.');
        }
        catch (error) {
            console.error('Database connection error: ', error);
            process.exit(0);
        }
    });
};
exports.dbConnect = dbConnect;
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    name: String
});
const ContentSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ['document', 'tweet', 'youtube', 'link'],
        required: true
    },
    title: String,
    link: String,
    tags: [
        { type: mongoose_1.default.Types.ObjectId, ref: 'Tag' }
    ],
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const TagSchema = new mongoose_1.Schema({
    tagName: {
        type: String,
        unique: true,
        trim: true
    }
});
const LinkSchema = new mongoose_1.Schema({
    hash: String,
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User',
        unique: true,
        require: true
    }
});
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.UserModel = UserModel;
const ContentModel = (0, mongoose_1.model)('Content', ContentSchema);
exports.ContentModel = ContentModel;
const TagModel = (0, mongoose_1.model)('Tag', TagSchema);
exports.TagModel = TagModel;
const LinkModel = (0, mongoose_1.model)('Link', LinkSchema);
exports.LinkModel = LinkModel;
