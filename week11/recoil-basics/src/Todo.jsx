import { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const todoListState=atom({
    key:'todoListState',
    default:[],
})
const todoListFilterState=atom({
    key:'todoListFilterState',
    default:'Show All'
})
const filteredTodoListState=selector({
    key:'filteredTodoListState',
    get:({get})=>{
        const filter=get(todoListFilterState);
        const list=get(todoListState);

        switch(filter){
            case 'Show Completed':
                return list.filter((item)=>(item.isComplete));
            case 'Show Uncompleted':
                return list.filter((item)=>(!item.isComplete));
            default:
                return list;
        }
    }
})
const todoListStatsState=selector({
    key:'todoListStatsState',
    get:({get})=>{
        const todoList=get(todoListState);
        const totalNum=todoList.length;
        const totalCompletedNum=todoList.filter(todo=>todo.isComplete).length;
        const totalUnCompletedNum=totalNum-totalCompletedNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum
        };
    }
})


const TodoItemCreator=()=>{
    const [inputValue,setInputValue]=useState('');
    const [todoList,setTodoList]=useRecoilState(todoListState);

    const addItemHandler=function(){
        if(inputValue==='') return;
        setTodoList((prevTodoList)=>([
            ...prevTodoList,
            {
                id:getId(),
                title:inputValue,
                isComplete:false,
            }
        ]));
        setInputValue('');
    }
    const onChangeHandler=function(event){
        setInputValue(event.target.value);
    }

    return (
    <div style={{padding:"1rem"}}>
        <input type="text" value={inputValue} onChange={onChangeHandler} style={{height:"1.5rem", width:"20rem", marginRight:"1rem"}}/>
        <button onClick={addItemHandler} style={{height:"1.5rem", width:"5rem", marginLeft:"1rem"}} >Add</button>
    </div>
    );
}

const TodoItem=function({item}){
    const [todoList,setTodoList]=useRecoilState(todoListState);

    const editItemHandler=function(event){
        const newTodoList=todoList.map((todo)=>(todo===item?{...todo,title:event.target.value}:todo))
        setTodoList(newTodoList);
        console.log(newTodoList);
    }
    const toggleItemHandler=function(){
        const newTodoList=todoList.map((todo)=>(todo===item?{...todo,isComplete:!item.isComplete}:todo))
        setTodoList(newTodoList);
    }
    const deleteItemHandler=function(){
        const newTodoList=todoList.filter((todo)=>(todo!==item))
        setTodoList(newTodoList);
    }


    return(
    <div>
        <div style={{padding:"1rem", display:"flex", justifyContent:"space-between", height:"2rem", gap:"1rem", border:"1px solid red", marginBottom:'0.5rem'}}>
            <div style={{height:"100%", width:"50%"}}>
                <input type="text" value={item.title} onChange={editItemHandler} style={{height:"100%", width:"100%"}}/>
            </div>
            <div style={{height:"100%", width:"50%", display:'flex', justifyContent:'flex-end', gap:'5px'}} >
                <input 
                    type="checkbox"
                    checked={item.isComplete}
                    onChange={toggleItemHandler}
                    style={{height:"100%"}}
                />
                <button onClick={deleteItemHandler} style={{height:"100%"}} >Delete X</button>
            </div>
        </div>
    </div>
    );
}
const TodoListFilters=()=>{
    const [filter,setFilter]=useRecoilState(todoListFilterState)

    const handleOnChange=function(event){
        setFilter(event.target.value);
    }

    return (
    <>
        Filter:
        <select value={filter} onChange={handleOnChange}>
            <option value="Show All">All</option>
            <option value="Show Completed">Completed</option>
            <option value="Show Uncompleted">Uncompleted</option>
        </select>
    </>
    );
}
const TodoListStats=function(){
    const {totalNum, totalCompletedNum, totalUnCompletedNum}=useRecoilValue(todoListStatsState);

    return (
        <ul style={{listStyle:'none'}}>
            <li> Total Items: {totalNum} </li>
            <li> Items Completed: {totalCompletedNum} </li>
            <li> Items not Completed: {totalUnCompletedNum} </li>
        </ul>
    );
}








const TodoList=()=>{
    const todoList=useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>

            {todoList.map((todoItem)=>(
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}

//utility for creating ids
let id=0;
function getId(){
    return id++;
}

export default TodoList;