const {z}=require('zod');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const { userModel } = require('./db');

mongoose.connect('mongodb+srv://adilshaikh:Adil4064%40@democluster.amro0.mongodb.net/todo-app-database')
const saltRounds=10;

const userSchema=z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
})
.transform(({email,password,name})=>{
    return {
        email: email.toLowerCase(),
        password,
        name
    }
})
.superRefine(async ({email,name,password}, ctx)=>{
    const foundUser= await userModel.findOne({email});
    if(foundUser){
        ctx.addIssue({
            code:'custom',
            path:['email'],
            message:'email already registered'
        })
    }

    if(password.length<8){
        ctx.addIssue({
            code:'custom',
            path:['password'],
            message:'password must have atleast 8 characters'
        })
    }
})
.transform(async ({name,email,password})=>{
    const hashPassword=await bcrypt.hash(password,saltRounds);
    return {
        email,
        name,
        password: hashPassword
    }
})

const todoSchema=z.object({
    title:z.string(),
    done:z.boolean()
})


module.exports={
    userSchema,
    todoSchema
}