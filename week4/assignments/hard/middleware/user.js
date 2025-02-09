const dotenv = require('dotenv');
const redis=require('redis');
const jwt=require('jsonwebtoken');

const redisClient=redis.createClient();
dotenv.config();

(async ()=>{
    try{
        await redisClient.connect();
    }
    catch(err){
        console.error('failed to connect to redis', err);
        throw new Error('failed to connect to redis')
    }
})();

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    try{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(403).json({
                message:'bad request',
                Error:'token missing'
            })
        }
    
        const jwtResponse=jwt.verify(token,process.env.JWT_SECRET);
        if(!jwtResponse){
            return res.status(403).json({
                message:'not authorised',
                Error:'invalid token'
            })
        }
    
        const isAlreadyloggedIn= await redisClient.get(jwtResponse.id);
        if(!isAlreadyloggedIn){
            return res.status(403).json({
                message:'not authorised',
                Error:'user already logged out, please login again!'
            })
        }
        
        req.userId=jwtResponse.id;
        next();
    }
    catch(err){
        res.status(500).json({
            message:'error in userMiddleware.',
            Error:err.message
        })
    }
}

module.exports ={
    userMiddleware,
    redisClient
}