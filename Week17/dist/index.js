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
const client = new pg_1.Client('postgresql://neondb_owner:npg_5Ed3qjJscofv@ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require');
// const client = new Client({
//     user: "neondb_user",
//     password: "npg_5Ed3qjJscofv",
//     host: "ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech",
//     port: 5432,
//     database: "neondb",
//     ssl: { rejectUnauthorized: false },
// });
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `insert into users(
                username,email,password
            ) values($1, $2, $3) returning *`;
            const values = ["manu", "manu@gmail.com", "manu123"];
            const result = yield client.query(query, values);
            console.log(result.rows);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            client.end();
        }
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `select * from users`;
            const result = yield client.query(query);
            console.log(result.rows);
        }
        catch (e) {
            console.log(e);
        }
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `update users set username=$1 where username=$2 returning *`;
            const values = ['nitishmaurya', 'maurya'];
            const result = yield client.query(query, values);
            console.log(result.rows);
        }
        catch (e) {
            console.log(e);
        }
    });
}
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // await createUser();
        // await getUser();
        yield updateUser();
    });
})();
