import { useEffect, useRef } from "react"

const usePrev=function(value,initial){
    const ref=useRef({target:value,previous:initial});

    if(ref.current.target!==value){
        ref.current.previous=ref.current.target;
        ref.current.target=value;
    }
    return ref.current.previous;
}

// it returns first, effects get called later. BUT WHY?


export default usePrev;