const {Router}=require('express');
const { User, Purchase, Course } = require('../database');
const { userSchema } = require('../zod/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { USER_JWT_SECRET } = require('../config');
const { userMiddleware } = require('../middlewares/user');


const userRouter=Router();


userRouter.post('/signup',async function(req,res){
    try{
        const {email,password,firstname,lastname}=req.body;
        if(!email || !password || !firstname || !lastname){
            return res.status(400).json({
                message:'bad request for signup',
                Error:'all fields are required'
            })
        }
    
        const parseResponse=await userSchema.safeParseAsync({email,password,firstname,lastname});
        if(!parseResponse.success){
            return res.status(400).json({
                message:'please provide valid inputs',
                Error:parseResponse.error.format()
            })
        }
    
        const createUser=await User.create({
            email:parseResponse.data.email,
            password:parseResponse.data.password,
            firstname:parseResponse.data.firstname,
            lastname:parseResponse.data.lastname
        })
        console.log(createUser);
    
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

userRouter.post('/signin',async function(req,res){
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:'bad request',
                Error:'all fields are required'
            })
        }
    
        const existingUser=await User.findOne({email});
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
        
        console.log(USER_JWT_SECRET);
        const token=jwt.sign({
            id:existingUser._id.toString()
        },USER_JWT_SECRET);
    
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

userRouter.get('/purchases',userMiddleware,async function(req,res){
    const userId=req.userId;

    const courses=await Purchase.find({userId})

    res.json({
        courses
    })
})


module.exports={
    userRouter,
}