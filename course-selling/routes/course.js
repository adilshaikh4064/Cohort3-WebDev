const {Router}=require('express');
const { Course, Purchase } = require('../database');
const { userMiddleware } = require('../middlewares/user');

const courseRouter=Router();

courseRouter.get('/',(req,res)=>{

})

courseRouter.get('/preview',async (req,res)=>{
    const courses=await Course.find({});

    res.json({
        courses
    })
})

courseRouter.post('/purchase',userMiddleware,async (req,res)=>{
    const userId=req.userId;
    const courseId=req.body.courseId;

    await Purchase.create({
        courseId,
        userId
    })

    res.json({
        message:'course purchased successfully'
    })
})


module.exports={
    courseRouter,
}