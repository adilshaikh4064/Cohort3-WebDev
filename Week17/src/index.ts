import { Client, Pool } from "pg";

//const client=new Client('postgresql://neondb_owner:npg_5Ed3qjJscofv@ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require')
const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_5Ed3qjJscofv@ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    ssl: { rejectUnauthorized: false },
    max: 10 // Limit to 10 connections
});

// const client = new Client({
//     user: "neondb_user",
//     password: "npg_5Ed3qjJscofv",
//     host: "ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech",
//     port: 5432,
//     database: "neondb",
//     ssl: { rejectUnauthorized: false },
// });

// async function createUser() {
//     try {
//         await client.connect();
//         const query = `insert into users(
//                 username,email,password
//             ) values($1, $2, $3) returning *`;

//         const values = ["manu", "manu@gmail.com", "manu123"];

//         const result = await client.query(query, values);
//         console.log(result.rows);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         client.end();
//     }
// }

// async function getUser(){
//     try{
//         await client.connect();
//         const query= `select * from users`
//         const result=await client.query(query);
//         console.log(result.rows);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// async function updateUser(){
//     try{
//         await client.connect();
//         const query=`update users set username=$1 where username=$2 returning *`;
//         const values=['nitishmaurya','maurya'];

//         const result=await client.query(query,values);
//         console.log(result.rows);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

async function deleteUser(){
    const client=await pool.connect();
    try{
        const query=`delete from users where email=$1 returning *`;
        const values=['negi@gmail.com'];

        const result=await client.query(query,values);
        console.log(result.rows);
    }
    catch(e){
        console.log(e);
    }
    finally{
        client.release();
    }
}

(async function main() {
    // await createUser();
    // await getUser();
    // await updateUser();
    await deleteUser();
})();
