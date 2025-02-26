import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import usePrev from "./hooks/usePrev";
import useDebounce from "./hooks/useDebounce";

function App() {
  // const [currentPost,setCurrentPost]=useState(1);
  // const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);

  // if(loading){
  //   return <div>
  //     Loading...
  //   </div>
  // }


  // const [state,setState]=useState(0);
  // const prevState=usePrev(state);

  // const [glitch,setGlitch]=useState(0);

  const inputRef=useRef();
  const [text,setText]=useState("");
  const handleChange=function(){
    useDebounce();
    setText(inputRef.current.value);
  }

  return (
    <>
      <p> search the product </p>
      <input type="text" ref={inputRef} placeholder="type something... " onChange={handleChange} />
      <p> entered input value: {text} </p>





























{/* The commented code block you provided in the `App` component is setting up a simple UI with some
functionality using React hooks. Here's a breakdown of what each part of the code is doing: */}
      {/* <p> {state} </p>
      <button onClick={()=>{
        setState(state=>state+1);
      }}>
        click to increase
      </button>

      <p> the previous value of state was {prevState} </p>

      <button onClick={()=>{setGlitch(glitch+1)}}>cause the glitch</button> */}

{/* The commented code block you provided in the `App` component is setting up a section that displays
details of a post based on the `currentPost` state value. Here's a breakdown of what the code is
doing: */}
      {/* <div>
        <h2>details of post number:{currentPost}</h2>
        <ul>
          {Object.keys(finalData).map((key)=>(
            <li key={key}>
              {key}:{finalData[key]}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={()=>setCurrentPost(1)}>post 1</button>
        <button onClick={()=>setCurrentPost(2)}>post 2</button>
        <button onClick={()=>setCurrentPost(3)}>post 3</button>
      </div> */}
    </>
  )
}

export default App;
