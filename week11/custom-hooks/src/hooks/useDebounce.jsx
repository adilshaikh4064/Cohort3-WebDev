import { useEffect, useState } from "react";

const useDebounce=function(inputText,delay){
    const [debouncedValue,setDebouncedValue]=useState(inputText);

    useEffect(function(){
        const handlerId=setTimeout(() => {
            setDebouncedValue(inputText);
        }, delay);

        return function(){
            clearInterval(handlerId);
        }
    },[inputText,delay]);

    return debouncedValue;
}

export default useDebounce;