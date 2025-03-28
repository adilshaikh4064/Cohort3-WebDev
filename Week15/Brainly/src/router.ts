import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserSchemaZod, User, ContentSchemaZod, Content } from "./zod";
import { ContentModel, IContent, LinkModel, TagModel, UserModel } from "./db";
import { config } from "./config";
import { userMiddleware } from "./middleware";
import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';
import { generateUniqueHash } from "./util";

const SALT_ROUNDS = config.saltRounds;
const JWT_SECRET=config.jwtSecret;

const userRouter = express.Router();
const contentRouter= express.Router();
const brainRouter=express.Router();

userRouter.post('/signup',async (req,res)=>{
try{
    const result=await UserSchemaZod.safeParseAsync(req.body);
    if(!result.success){
        res.status(400).json({
            message: 'input/inputs is/are not valid.',
            error: result.error.format()
        })
    }
    
    const user:User=result.data!;
    await UserModel.create(user);

    res.status(200).json({
        message:'you are signed up successfully.'
    })
}
catch(error){
    res.status(500).json({
        message:'server error while registering the user.',
        error: error
    })
}
})
userRouter.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password ){
            res.status(400).json({
                message: 'input(s) is/are invalid'
            })
        }

        const userFound=await UserModel.findOne({email});
        if(!userFound){
            res.status(403).json({
                message:'user email is not registered.'
            })
        }
        const isPassowrdCorrect=await bcrypt.compare(password,userFound!.password);
        if(!isPassowrdCorrect){
            res.status(403).json({
                message:'Password does not match.'
            })
        }

        const jwtToken=jwt.sign({
            id:userFound!._id
        },JWT_SECRET,{
            expiresIn:'1h'
        })

        res.set('Authorization',`Bearer ${jwtToken}`)
        res.status(200).json({
            message:'login successfull.',
            jwtToken
        })
    }
    catch(error){
        res.status(500).json({
            message:'server error while signing the user in.',
            error: error
        })
    }
})

contentRouter.post('/',userMiddleware, async (req,res)=>{
    try{
        const result=await ContentSchemaZod.safeParseAsync(req.body);
        if(!result.success){
            res.status(400).json({
                message:'invalid inputs',
                Error: result.error.format()
            })
            return;
        }

        const content:Content=result.data;
        const {type, title, link, tags}=content;
    
        let tagIds=[];
        if(tags && tags.length>0){
            for(let tagName of tags){
                let tag=await TagModel.findOneAndUpdate(
                    {tagName},
                    {tagName},
                    {upsert:true, new:true}
                )
                tagIds.push(tag._id);
            }
        }
    
        const newContent=new ContentModel({
            type,
            title,
            link,
            tags:tagIds,
            userId:req.userId,
            shareableId: null
        })
        await newContent.save();
    
        res.status(200).json({
            message:'content added'
        })
    }
    catch(error){
        res.status(500).json({
            message:'server error while adding content to the database.',
            Error: error instanceof Error? error.message: 'Unknown error'
        })
    }
})
contentRouter.get('/',userMiddleware, async (req,res)=>{
    try{
        const contents=await ContentModel.find({userId:req.userId})
                                    .populate('tags').populate('userId');
        res.status(200).json({
            contents
        })
    }
    catch(error){
        res.status(500).json({
            message:'error while fetching contents from database.',
            Error: error instanceof Error? error.message:'Unknown error'
        })
    }
})
contentRouter.delete('/',userMiddleware, async (req,res)=>{
    try{
        const contentId=req.body.contentId;
        const result=await ContentModel.deleteMany({
            _id:new mongoose.mongo.BSON.ObjectId(contentId) ,
            userId:req.userId
        })
        res.status(200).json({
            message:'content deleted',
            result
        })
    }
    catch(error){
        res.status(500).json({
            message:'server error while deleting content.',
            error: error instanceof Error?error.message:'Unknown error'
        })
    }
})

brainRouter.post('/share',userMiddleware, async (req,res)=>{
    try{
        const {share}=req.body;
        const hash=generateUniqueHash(12);
        if(share){
            await LinkModel.create({
                userId: req.userId,
                hash
            })
        }
        else{
            await LinkModel.deleteOne({
                userId: req.userId
            })
        }

        res.status(200).json({
            message: 'sharable hash generated',
            shareLink: hash
        })
    }
    catch(error){
        res.status(500).json({
            message:'server error while creating sharable link.',
            error: error instanceof Error?error.message:'Unknown error'
        })
    }
})
brainRouter.get('/:sharelink', async (req,res)=>{
    try{
        const {sharelink}=req.params;
        const foundLink= await LinkModel.findOne({
            hash:sharelink,
        })
        if(!foundLink){
            res.status(404).json({
                message:'link expired or not valid',
            })
            return;
        }
        const content=await ContentModel.find({userId: foundLink.userId}).populate('tags');
        if(!content){
            res.status(404).json({
                message:'invalid or expired link'
            })
            return;
        }

        res.status(200).json({
            content
        })
        return;
    }
    catch(error){
        res.status(500).json({
            message:'server error while fetching the link',
            error: error instanceof Error?error.message:'Unknown error'
        })
    }
})

export{
    userRouter,
    contentRouter,
    brainRouter
}