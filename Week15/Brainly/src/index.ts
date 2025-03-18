import express from 'express';
import { brainRouter, contentRouter, userRouter } from './router';
import { config } from './config';
import { dbConnect } from './db';


const app=express();
dbConnect();
const PORT=config.port;
app.use(express.json());


app.use('/api/v1/user/',userRouter)
app.use('/api/v1/content/',contentRouter)
app.use('/api/v1/brain/',brainRouter)




app.listen((PORT),function(){
    console.log(`Brainly app is listening on port number: ${PORT}`);
})