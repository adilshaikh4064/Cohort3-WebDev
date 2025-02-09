const express=require('express');
const jwt=require('jsonwebtoken');
const cors=require('cors');
const JWT_SECRET='randomadililovemotu';

const app=express();
app.use(express.json());
app.use(cors());
const PORT=3000;

let users=[];
function auth(req,res,next){
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    
    let foundUser=users.find(user=>user.username===decodedInformation.username)
    if(foundUser){
        req.user=foundUser;
        next();
    }
    else{
        res.status(403).json({
            message:"invalid token",
        })
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+`/public/index.html`)
})

app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:'you are signed up successfully.'
    })

    console.log(users);
})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    let foundUser=users.find(user=>user.username===username && user.password===password)

    if(foundUser){
        const token=jwt.sign({username},JWT_SECRET)
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:'invalid username or password'
        })
    }

    console.log(users);
})

app.get('/me',auth,(req,res)=>{
    res.json({
        username:req.user.username,
        password:req.user.password
    })
})
app.put('/logout',auth,(req,res)=>{
    let foundUser=req.user;
    users=users.filter((user)=>user!==foundUser);
    res.json({
        message:'logged out successfully.'
    })
})

app.listen(PORT,()=>{
    console.log(`example app is listening on port number ${PORT}`);
})