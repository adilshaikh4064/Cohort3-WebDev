const z=require('zod');
const { User } = require('../database');
const dotenv=require('dotenv');
const bcrypt=require('bcrypt');


dotenv.config()


const userSchema=z.object({
    email:z.string().max(100),
    password:z.string().min(8).max(50),
    firstname:z.string().min(2).max(50),
    lastname:z.string().min(2).max(50)
})
.transform(({email,password,firstname,lastname})=>(
    {
        email:email.toLowerCase(),
        password,
        firstname,
        lastname
    }
))
.superRefine(async ({email,password,firstname,lastname},ctx)=>{
    const existingUser=await User.findOne({email});
    if(existingUser){
        ctx.addIssue({
            code:'custom',
            path:['email'],
            message:'email already in use'
        })
    }
})
.transform(async ({email,password,firstname,lastname})=>{
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    const hashPassword=await bcrypt.hash(password,saltRounds);
    return {
        email,
        password:hashPassword,
        firstname,
        lastname
    }
})


module.exports={
    userSchema,
}