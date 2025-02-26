import { useEffect, useState } from "react"

const useFetch=function(url){
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(true);

    const getData=async function(){
        setLoading(true);
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(function(){
        getData();
    },[url]);
    useEffect(function(){
        const intervalId=setInterval(function(){
            getData();
        },5*1000);

        return function(){
            clearInterval(intervalId);
            console.log('component unmounted');
        }
    },[])

    return {
        finalData,
        loading
    }
}

export default useFetch;