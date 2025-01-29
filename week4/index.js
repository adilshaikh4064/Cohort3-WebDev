const express = require('express')
const fs=require(`fs`)
const app = express()

const port=3000
const filename=`/Users/adilshaikh/Desktop/cohort/week4/todo.json`
app.use(express.json())

app.get('/todos',(req,res)=>{
    console.log(fun);
    try{
        const fileContent=fs.readFileSync(filename,`utf-8`);
        const todos=JSON.parse(fileContent);

        res.json({
            message:`Data retrieved successfully`,
            data:todos,
            recievedParam:{a,b},
        });
    }
    catch(error){
        res.status(500).json({
            error:`failed to red the file.`
        })
    }
})

app.post(`/add-todo`,(req,res)=>{
    const todo=req.body;
    let fileContent=fs.readFileSync(filename,`utf-8`);
    let todos=JSON.parse(fileContent);
    todos.push({
        name:todo.name,
        description:todo.description
    })
    console.log(todos);
    fileContent=JSON.stringify(todos,null,4);
    fs.writeFileSync(filename,fileContent,'utf-8');
    
    res.json({
        success:`todo is successfully added`
    })
})

app.put(`/mark-todo`,(req,res)=>{
    let obj=req.body;
    let todos=JSON.parse(fs.readFileSync(filename,`utf-8`));
    todos.forEach(todo=>{
        if(todo.name===obj.name) todo.markit=true;
    })
    fs.writeFileSync(filename,JSON.stringify(todos,null,4),`utf-8`)
    res.json({
        marked:`todo is successfully marked as done`
    })
})

app.delete(`/delete-todo`,(req,res)=>{
    let obj=req.body;
    let todos=JSON.parse(fs.readFileSync(filename,'utf-8'))
    let newtodos=todos.filter(todo=>{
        if(todo.name!==obj.name) return true;
    })
    fs.writeFileSync(filename,JSON.stringify(newtodos,null,4),`utf-8`)
    res.json({
        deleted:`todo is successfully deleted`
    })
})


app.listen(port,()=>{
    console.log(`Example app listening on port number ${port}`);
})