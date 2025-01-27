const { Command } = require('commander');
const program = new Command();
const fs=require(`fs`);
const filename=`/Users/adilshaikh/Desktop/cohort/nodeBasics/todos.json`


program
.name(`todoCLI`)
.description(`CLI to perform simple Todo Operations`)
.version(`0.8.0`);

program.command(`add-todo`)
.description(`Add a todo to the file todo.json`)
.argument(`<json>`,`todo to add`)
.action((json)=>{
    try{
        const todo=JSON.parse(json);
        let data=fs.readFileSync(filename,`utf-8`,);
        let todosArray=JSON.parse(data);
        
        todosArray.push(todo);
        data=JSON.stringify(todosArray,null,4);
        fs.writeFileSync(filename,data);
        
        console.log(`Todo added successfully: ${todo}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`);
    }
});

program.command(`delete-todo`)
.description(`delete the todo with given name in argument`)
.argument(`<string>`,`todo to delete`)
.action((name)=>{
    let data=fs.readFileSync(filename,'utf-8');
    let todosArray=JSON.parse(data);
    let todos=todosArray.filter(todo=>todo.name!==name);

    data=JSON.stringify(todos,null,4);
    fs.writeFileSync(filename,data);
    console.log(`Todo deleted successfully`);
    todos.forEach((todo)=>{
        console.log(todo);
    })
});

program.command(`mark-todo`)
.description(`mark a todo done`)
.argument(`<string>`,`todo to mark`)
.action((name)=>{
    let data=fs.readFileSync(filename,`utf-8`)
    let todos=JSON.parse(data);
    todos.forEach((todo)=>{
        if(todo.name===name) todo.done=true;
    })
    data=JSON.stringify(todos,null,4);
    fs.writeFileSync(filename,data);
    console.log(`Todo marked done`)
    todos.forEach((todo)=>{
        console.log(todo);
    })
})


program.parse();