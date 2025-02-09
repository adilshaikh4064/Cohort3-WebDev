const jwt=require('jsonwebtoken');
const JWT_SECRET='adil-server-secret';


function auth(req,res,next){
    try{
        const {authorization}=req.headers;
        if(!authorization){
            res.status(400).json({message:'bad request!, token missing'});
        }

        const jwtResponse=jwt.verify(authorization,JWT_SECRET);
        if(!jwtResponse){
            res.status(403).json({message:'invalid credentials.'});
        }

        req.userId=jwtResponse.id;
        next();
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message:'server error',
            error:err.message
        })
    }
}

module.exports={
    auth
}