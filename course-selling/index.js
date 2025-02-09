const express=require('express');
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const dotenv=require('dotenv');
const { mongoose } = require('mongoose');
const { PORT } = require('./config');


const app=express();
dotenv.config()

app.use(express.json());
app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter)


async function main(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log(`database conncted`);
    }
    catch(err){
        return {
            message:'server error while connecting to database,',
            Error:err.messsage
        }
    }
    app.listen(PORT,()=>{
        console.log(`example app is listening on port number ${PORT}`);
    })
}

main();
// app.listen(port,()=>{
//     console.log(`example app is listening on port number ${port}`)
// });