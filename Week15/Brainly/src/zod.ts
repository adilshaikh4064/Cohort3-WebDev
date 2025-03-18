import {z} from 'zod';
import bcrypt from 'bcrypt';
import { config } from './config';
import { UserModel } from './db';

const SALT_ROUNDS=config.saltRounds;

export const UserSchemaZod=z.object({
    username: z.string().min(5,{message:"username must have atleast 5 characters."}),
    email: z.string().email(),
    password: z.string().min(8,{message:"password must have atleast 8 characters."}),
    name: z.string().min(3,{message:"name must have atleast 3 characters."})
})
.transform(({ username, email, password, name }) => ({
    username,
    email: email.toLowerCase(), // ✅ Sync transformation (valid)
    password,
    name,
}))
.superRefine(async function({username,email,password,name},ctx){
    const foundUser= await UserModel.findOne({username});
    if(foundUser){
        ctx.addIssue({
            code:'custom',
            path:['username'],
            message:'username already exists'
        })
    }
})
.transform(async function({username,email,password,name}){
    const hashPassword= await bcrypt.hash(password,SALT_ROUNDS);
    return {
        email,
        username,
        password: hashPassword,
        name
    }
})

export const ContentSchemaZod=z.object({
    type: z.enum(['document','tweet','youtube','link'],{message:'type must be the valid'}),
    title: z.string(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
})

type User=z.infer<typeof UserSchemaZod>;
type Content=z.infer<typeof ContentSchemaZod>;

export{
    User,
    Content
}