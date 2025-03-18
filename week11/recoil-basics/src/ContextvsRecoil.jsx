import { createContext, useContext, useState } from "react";
import {atom, RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';

const countState=atom({
    key:'countState',
    default:0
})

// const countContext=createContext();
// const CountContextProvider=function({children}){
//     const [count,setCount]=useState(0);

//     return(
//         <countContext.Provider value={{count,setCount}}>
//             {children}
//         </countContext.Provider>
//     );
// }

const Value=function(){
    // const {count,setCount}=useContext(countContext);
    const count=useRecoilValue(countState);

    return (
    <div>
        Value is: {count}
    </div>
    );
}
const Inreament=function(){
    // const {count,setCount}=useContext(countContext);
    const setCount=useSetRecoilState(countState);

    const handleOnclick=function(){
        setCount(count=>count+1)
    }

    return(
    <>
        <button onClick={handleOnclick}>increase value</button>
    </>
    );
}
const Decreament=function(){
    // const {count,setCount}=useContext(countContext);
    const setCount=useSetRecoilState(countState);

    const handleOnclick=function(){
        setCount(count=>count-1)
    }

    return( 
    <>
        <button onClick={handleOnclick}>decrease value</button>
    </>
    );
}






const ContextvsRecoil=function(){
    return (
    <>
        <RecoilRoot>
            <Value/>
            <br/>
            <Inreament/>
            <Decreament/>
        </RecoilRoot>
    </>
    );
}


export default ContextvsRecoil;