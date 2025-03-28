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
const ws_1 = require("ws");
const ioredis_1 = __importDefault(require("ioredis"));
const server = new ws_1.WebSocketServer({ port: 8080 });
const topics = new Map();
const redisPub = new ioredis_1.default();
const redisSub = new ioredis_1.default();
redisSub.subscribe('global_topic');
server.on('connection', (socket) => {
    socket.on('message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { type, topic, message } = JSON.parse(data.toString());
        if (type === 'publish') {
            yield redisPub.publish(topic, message);
            socket.send('message published');
        }
        else if (type === 'subscribe') {
            if (!topics.has(topic)) {
                topics.set(topic, new Set());
            }
            topics.get(topic).add(socket);
            socket.send(`Subscribe to the topic: ${topic}`);
        }
    }));
    socket.on('close', () => {
        topics.forEach((subscribers, topic) => {
            subscribers.delete(socket);
            if (subscribers.size === 0) {
                topics.delete(topic);
            }
        });
    });
});
redisSub.on('message', (topic, message) => {
    if (topics.has(topic)) {
        for (const subscriber of topics.get(topic)) {
            subscriber.send(`${topic}: ${message}`);
        }
    }
});
console.log('server is running');
