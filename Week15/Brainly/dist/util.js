"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueHash = void 0;
const generateUniqueHash = function (len) {
    const str = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    const length = str.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += str[Math.floor(Math.random() * length)];
    }
    return ans;
};
exports.generateUniqueHash = generateUniqueHash;
