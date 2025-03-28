import {Client} from 'pg';

// const client=new Client('postgresql://neondb_owner:npg_5Ed3qjJscofv@ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require')

const client=new Client({
    user:'neondb_owner',
    password:'npg_5Ed3qjJscofv',
    host:'ep-jolly-hall-a590mlvg-pooler.us-east-2.aws.neon.tech',
    port:5432,
    database:'neondb',
    ssl:{rejectUnauthorized:false}
})

async function createUser(){
    const query=`insert into users (username,email,password) values ($1,$2,$3) returning *`;
    const values=['manisha','manisha@gmail.com','manisha123'];

    try{
        const res=await client.query(query,values);
        console.log(res.rows)
    }
    catch(e){
        console.log(`Error while creating user: ${e}`);
    }
}
async function getUser(){
    const query=`select * from users`;

    try{
        const res=await client.query(query);
        console.log(res.rows);
    }
    catch(e){
        console.log(`Error while getting the users table: ${e}`)
    }
}
async function updateUser(){
    const query=`update users set username=$1 where email=$2 returning *`;
    const values=['manishabharadwaj','manisha@gmail.com'];

    try{
        const res=await client.query(query,values);
        console.log(res.rows);
    }
    catch(e){
        console.log(`Error while updating user: ${e}`);
    }
}
async function deleteUser(){
    const query=`delete from users where email=$1 returning *`;
    const values=['manisha@gmail.com'];

    try{
        const res=await client.query(query,values);
        console.log(res.rows);
    }
    catch(e){
        console.log(`Error while deleting user: ${e}`);
    }
}

async function main(){
    await client.connect();
    await createUser();
    await getUser();
    await updateUser();
    await deleteUser();
    await getUser();
    await client.end();
}
main();