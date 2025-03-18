import {Request, Response, NextFunction} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from './config';

const JWT_SECRET=config.jwtSecret;

const userMiddleware=function(req:Request, res:Response, next:NextFunction){
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({
            message:'Unauthorized: no token provided.'
        })
        return;
    }

    const token=authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    
        req.userId = decoded.id; // Ensure TypeScript recognizes this property
        next();
    } 
    catch (error) {
        res.status(403).json({
        message: "Error occurred while verifying token",
        error: error instanceof Error ? error.message : "Unknown error",
    });
    }
}

export{
    userMiddleware
}