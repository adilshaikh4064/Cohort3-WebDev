const express=require(`express`);

const app=express();
const port=3000;




app.listen(port,()=>{
    console.log(`example app is listening on port number ${port}`);
})