const { jwt, ADMIN_JWT_SECRET } = require("../config");

async function adminMiddleware(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(403)
            .json({
                message:'not authorised',
                Error:'token is missing'
            })
        }
    
        const jwtResponse=jwt.verify(token,ADMIN_JWT_SECRET);
        if(!jwtResponse){
            return res.status(403)
            .json({
                message:'not authorised',
                Error:'token invalid'
            })
        }
    
        req.userId=jwtResponse.id;
        next();
    }
    catch(err){
        res.status(500)
        .json({
            message:'server error while verifying user',
            Error:err.message
        })
    }
}


module.exports={
    adminMiddleware,
}