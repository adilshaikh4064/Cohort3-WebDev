import express from 'express';

const app=express();
app.use(express.json());


app.get('/signup',(req,res)=>{
    res.json({
        message:'hello from signup',
    })
})
app.get('/signin',(req,res)=>{
    res.json({
        message:'hello from signin',
    })
})
app.get('/chat',(req,res)=>{
    res.json({
        message:'hello from chat',
    })
})

app.listen(3003);