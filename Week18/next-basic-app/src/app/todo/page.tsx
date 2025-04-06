import axios from 'axios';

interface ITodo{
    title: string;
    done: boolean;
}

function Todo({title,done}:ITodo){
    return(
    <div className="my-3 border-y-1 ">
        <p>Title: {title}</p>
        <p>done: {done} </p>
    </div>
    )
}
async function getTodos(){
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos');

    if(response.status===200){
        return response.data;
    }
    else {
        return [];
    }
}

export default async function Home(){

    const todos=await getTodos();

    return (
    <ul>
        {todos.map((todo,index)=>(
            <li key={index}>
                <Todo title={todo.title} done={todo.completed} />
            </li>
        ))}
    </ul>
    )
}
