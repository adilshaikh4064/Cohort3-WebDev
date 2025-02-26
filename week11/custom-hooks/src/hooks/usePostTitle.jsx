import { useEffect, useState } from "react";

function usePostTitle(){
    const [post,setPost]=useState({});

    const getPost=async function(){
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setPost(json);
    }

    useEffect(function(){
        getPost();
    },[])
    return post.title;
}

export default usePostTitle;
