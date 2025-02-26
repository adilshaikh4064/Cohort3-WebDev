import { useEffect, useRef } from "react"

const usePrev=function(value){
    const ref=useRef();

    useEffect(function(){
        ref.current=value;

    },[value]);

    return ref.current;
}

// it returns first, effects get called later. BUT WHY?


export default usePrev;