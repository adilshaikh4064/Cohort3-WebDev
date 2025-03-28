// import { useRecoilValue } from "recoil";
// import { recieveMessageAtom } from "../atom";

const RecieveMessageBox=({message}:{
    message:string
})=>{
    // const recieveMessage=useRecoilValue(recieveMessageAtom)

    return (
    <div className="w-full m-1">
        <div className="w-fit px-2 bg-inputDiv-bg text-gray-100 text-sm rounded-2xl mt-2 text-left break-words hyphens-auto">
            <p className="max-w-80"> {message} </p>
        </div>
    </div>
    )
}

export default RecieveMessageBox;
