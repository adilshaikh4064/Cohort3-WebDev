// const redis=require('redis');

// async function createRedisClient(index){
//     const client=redis.createClient({
//         host:'localhost',
//         port:6379+index,
//         db:index
//     })
//     try{
//         await client.connect();
//     }
//     catch(err){
//         return {Error:err.message}
//     }

//     client.on('error',(err)=>{
//         console.log('Error: ',err.message);
//     })

//     return client;
// }

const redis = require('redis');

async function createRedisClient(index) {
    const client = redis.createClient({
        host: 'localhost',
        port: 6379 + index,
        db: index
    });

    try {
        await client.connect();
    } catch (err) {
        return { Error: err.message };
    }

    client.on('error', (err) => {
        console.log('Error: ', err.message);
    });

    return client;
}

module.exports={
    createRedisClient,
}