const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {userModel,todoModel}=require('./db');
const {auth}=require('./auth');
const { userSchema, todoSchema } = require('./zod');
mongoose.connect('mongodb+srv://adilshaikh:Adil4064%40@democluster.amro0.mongodb.net/todo-app-database')


const app=express();
const port=3000;
const JWT_SECRET='adil-server-secret';



app.use(express.json());

app.post('/signup',async (req,res)=>{
    try{
        const {email,password,name}=req.body;
        if(!email || !password || !name){
            res.status(400).json({message:'all feilds are requiered.'});
        }

        const result=await userSchema.safeParseAsync({email,name,password});
        if(!result.success){
            res.status(400).json({
                message:'Error occured',
                error:result.error.format()
            })
        }
        const user=result.data;

        await userModel.create({
            email: user.email,
            password: user.password,
            name: user.name,
        })

        res.json({message: 'you are successfully registered !'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message:'error registering user',
            error:err.message
        })
    }
})


app.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).json({message:'all feilds are required'});
        }

        const foundUser=await userModel.findOne({email});
        if(!foundUser){
            res.status(403).json({message:'user is not registered'});
        }

        const isPasswordCorrect=await bcrypt.compare(password,foundUser.password);
        if(!isPasswordCorrect){
            res.status(403).json({message:'password is not correct! try again'});
        }

        const token=jwt.sign({
            id:foundUser._id.toString()
        },JWT_SECRET,{
            expiresIn:'1h'
        })

        res.json({
            message:'login successfull.',
            token
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message:'error signing in user (server error)',
            error:err.message
        })
    }
})


app.post('/todo',auth,async (req,res)=>{
    try{
        const {title,done}=req.body;
        if(!title || typeof done!=='boolean'){
            res.status(400).json({message:'all fields are required '})
            return;
        }

        const result=todoSchema.safeParse({done,title});
        if(!result.success){
            res.status(400).json({message:'invalid inputs'})
            return;
        }

        const todo=result.data;
        const userId=req.userId;

        await todoModel.create({
            userId,
            title: todo.title,
            done: todo.done
        })
        res.json({message:'todo created successfully.'})
    }
    catch(err){
        res.status(500).json({
            message:'server error',
            error:err.message
        })
    }
})


app.get('/todos',auth,async (req,res)=>{
    const userId=req.userId
    const todos= await todoModel.find({
        userId
    })

    res.json({
        todos
    })
})



app.listen(port,()=>{
    console.log(`todos application is listening on port number ${port}`);
})