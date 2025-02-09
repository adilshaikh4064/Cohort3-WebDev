const { Router } = require("express");
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const router = Router();
const {userMiddleware, redisClient} = require("../middleware/user");
const { userSchema, bcrypt } = require("../zod/zod");
const { User, Todo } = require("../database");

dotenv.config();
const jwtSecret=process.env.JWT_SECRET;

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    try{
        const {email,password,username}=req.body;
        if(!email || !password || !username){
            return res.status(400).json({
                Error:'bad request',
                message:'all fields are required'
            })
        }

        const parseResponse=await userSchema.safeParseAsync({email,password,username});
        if(!parseResponse.success){
            return res.status(400).json({
                message:'please provide valid input.',
                Error:parseResponse.error.format()
            })
        }

        const createdUser=await User.create({
            email: parseResponse.data.email,
            password: parseResponse.data.password,
            username: parseResponse.data.username
        })
        console.log(createdUser);

        return res.json({message:'user singed up successfully.'});
    }
    catch(err){
        res.status(500)
        .json({
            message:'server error',
            ERROR:err.message
        })
    }
});

router.post('/login',async (req, res) => {
    // Implement user login logic
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:'bad request',
                Error:'all fields are mandatory.'
            })
        }
    
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(403).json({
                message:'invalid email (aka not authorised)!',
                Error:"user doesn't exists."
            })
        }

        const isPasswordCorrrect= bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrrect){
            return res.status(403).json({
                message:'not authorised',
                Error:"password does't match"
            })
        }
        
        const isAlreadyloggedIn=await redisClient.exists(existingUser._id.toString());
        if(isAlreadyloggedIn){
            const token=await redisClient.get(existingUser._id.toString());
            return res.status(400).json({
                message:'bad request',
                Error:'user alread logged in',
                token:`${token}`,
                userId:`${existingUser._id.toString()}`
            })
        }

        const token=jwt.sign({
            id:existingUser._id.toString()
        },jwtSecret);

        const key=existingUser._id.toString();
        await redisClient.set(key,token);
    
        res
        .set({
            userId: existingUser._id.toString(),
            Authorization: `Bearer ${token}`
        }) 
        .json({
            message:'user signed in.',
            token
        })
    }
    catch(err){
        res.status(500).json({
            message:'server error',
            Error:err.message
        })
    }
});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    const userId=req.userId;

    const todos=await Todo.find({
        userId
    })
    res.json({
        todos
    })
});

router.post('/logout', userMiddleware,async (req, res) => {
    // Implement logout logic
    const key=req.userId;
    await redisClient.unlink(key);

    res.json({message:'user logged out.'});
});

module.exports = router