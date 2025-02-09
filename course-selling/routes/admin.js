const {Router}=require('express');
const { Admin, Course } = require('../database');
const { adminSchema } = require('../zod/admin');
const bcrypt=require('bcrypt');
const dotenv=require('dotenv');
const { createRedisClient } = require('../database/redis');
const jwt=require('jsonwebtoken');
const { ADMIN_JWT_SECRET } = require('../config');
const { adminMiddleware } = require('../middlewares/admin');

const adminRouter=Router();
dotenv.config()

// const redisClient=(async function connectRedis(){
//     return await createRedisClient(Number(process.env.ADMIN_REDIS) || 0);
// })();


adminRouter.post('/signup',async (req,res)=>{
    try{
        const {email,password,firstname,lastname}=req.body;
        if(!email || !password || !firstname || !lastname){
            return res.status(400).json({
                message:'bad request for signup',
                Error:'all fields are required'
            })
        }
    
        const parseResponse=await adminSchema.safeParseAsync({email,password,firstname,lastname});
        if(!parseResponse.success){
            return res.status(400).json({
                message:'please provide valid inputs',
                Error:parseResponse.error.format()
            })
        }
    
        const createdAdmin=await Admin.create({
            email:parseResponse.data.email,
            password:parseResponse.data.password,
            firstname:parseResponse.data.firstname,
            lastname:parseResponse.data.lastname
        })
        console.log(createdAdmin);
    
        res.json({
            message:'user signed up successfully.'
        })
    }
    catch(err){
        return res.status(500).json({
            message:'server error while creating user',
            Error:err.message
        })
    }
})

adminRouter.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:'bad request',
                Error:'all fields are required'
            })
        }
    
        const existingUser=await Admin.findOne({email});
        if(!existingUser){
            return res.status(403).status({
                message:'not authorised',
                Error:'user does not exist'
            })
        }
    
        const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(403).json({
                message:'not authorised',
                Error:'password does not match'
            })
        }
    
        // const isAlreadyloggedIn=await redisClient.exists(existingUser._id.toString());
        // if(isAlreadyloggedIn){
        //     const token=await redisClient.get(existingUser._id.toString());
        //     return res.status(400)
        //     .json({
        //         message:'bad request',
        //         Error:'user already signed in'
        //     })
        //     .set({
        //         userId:existingUser._id.toString(),
        //         Authorization:`Bearer ${token}`
        //     })
        // }
    
        const token=jwt.sign({
            id:existingUser._id.toString()
        },ADMIN_JWT_SECRET);
    
        // await redisClient.set(existingUser._id.toString(),token);
    
        res.json({
            message:'user signed in successfully',
            token
        })
        // .set({
        //     userId:existingUser._id.toString(),
        //     Authorization:`Bearer ${token}`
        // })
    }
    catch(err){
        res.status(500)
        .json({
            message:'server error while signing in',
            Error:err.message
        })
    }
})

adminRouter.post('/course',adminMiddleware,async (req,res)=>{
    try{
        const userId=req.userId;
        console.log(userId);
        const {title,discription,price,imageUrl}=req.body;
        if(!title || !discription || !price || !imageUrl){
            return res.status(400)
            .json({
                message:'bad request',
                Error:'all fields are required'
            })
        }
    
        const createdCourse= await Course.create({
            title,
            discription,
            imageUrl,
            price,
            creatorId:userId
        })
        console.log(createdCourse);
        console.log(createdCourse.creatorId);
        res.json({
            message:'course created successfully'
        })
    }
    catch(err){
        res.status(500)
        .json({
            message:'server error while creating the course',
            Error:err.message
        })
    }
})

adminRouter.get('/course/bulk',adminMiddleware,async (req,res)=>{
    try{
        const userId=req.userId;
        const courses=await Course.find({creatorId:userId})
        res.json({
            courses,
        })
    }
    catch(err){
        res.status(500)
        .json({
            message:'server error while fetching courses',
            Error:err.message
        })
    }
})

adminRouter.put('/course',adminMiddleware,async (req,res)=>{
    const userId=req.userId;
    const {title,discription,price,imageUrl,courseTitle}=req.body;
    if(!courseTitle){
        return res.status(400)
        .json({
            message:'bad request',
            Error:'title of the course to modified is required'
        })
    }
    
    await Course.updateOne(
        {
            title:courseTitle,
            creatorId:userId
        },
        {
            title,
            discription,
            price,
            imageUrl
        }
    )

    res.json({
        message:'course updated',
    })
})


module.exports={
    adminRouter,
}