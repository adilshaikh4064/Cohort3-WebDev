const express=require(`express`);
const cors=require('cors');

const app=express();
const port=3000;


app.use(cors());

app.listen(port,()=>{
    console.log(`example app is listening on port number ${port}`);
})