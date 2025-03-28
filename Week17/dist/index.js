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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client=new Client('postgresql://neondb_owner:npg_5Ed3qjJscofv@ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require')
const client = new pg_1.Client({
    user: 'neondb_owner',
    password: 'npg_5Ed3qjJscofv',
    host: 'ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech',
    port: 5432,
    database: 'neondb',
    ssl: { rejectUnauthorized: false }
});
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `insert into users (username,email,password) values ($1,$2,$3) returning *`;
        const values = ['manisha', 'manisha@gmail.com', 'manisha123'];
        try {
            const res = yield client.query(query, values);
            console.log(res.rows);
        }
        catch (e) {
            console.log(`Error while creating user: ${e}`);
        }
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `select * from users`;
        try {
            const res = yield client.query(query);
            console.log(res.rows);
        }
        catch (e) {
            console.log(`Error while getting the users table: ${e}`);
        }
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `update users set username=$1 where email=$2 returning *`;
        const values = ['manishabharadwaj', 'manisha@gmail.com'];
        try {
            const res = yield client.query(query, values);
            console.log(res.rows);
        }
        catch (e) {
            console.log(`Error while updating user: ${e}`);
        }
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `delete from users where email=$1 returning *`;
        const values = ['manisha@gmail.com'];
        try {
            const res = yield client.query(query, values);
            console.log(res.rows);
        }
        catch (e) {
            console.log(`Error while deleting user: ${e}`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        yield createUser();
        yield getUser();
        yield updateUser();
        yield deleteUser();
        yield getUser();
        yield client.end();
    });
}
main();
