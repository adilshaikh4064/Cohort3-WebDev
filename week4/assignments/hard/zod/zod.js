const z=require('zod');
const bcrypt=require('bcrypt');
const { User } = require('../database');
const saltRounds=10;


const userSchema=z.object({
    email:z.string().email().max(100),
    password:z.string().min(8).max(50),
    username:z.string().min(3).max(50)
})
.transform(({email,password,username})=>(
    {email:email.toLowerCase(),
    password,
    username}
))
.superRefine(async ({email,password,username},ctx)=>{
    if(username.size>50){
        ctx.addIssue({
            code:'custom',
            path:['username'],
            message:"username can't have more than 100 characters."
        })
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        ctx.addIssue({
            code:'custom',
            path:['email'],
            message:"user's email already exist."
        })
    }
    if(password.size<8){
        ctx.addIssue({
            code:'custom',
            path:['password'],
            message:"password must have atleast 8 characters."
        })
    }
})
.transform(async ({email,password,username})=>{
    // const hashPassword=await bcrypt.hash(password,saltRounds);
    return {email,
    // password: hashPassword,
    password: await bcrypt.hash(password,saltRounds),
    username}
})


module.exports={
    bcrypt,
    userSchema
}