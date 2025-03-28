// import { useRecoilValue } from "recoil";
// import { sendMessageAtom } from "../atom";

const SendMessageBox=({message}:{
    message:string
})=>{
    // const sendMessage=useRecoilValue(sendMessageAtom);

    return (
    <div className="w-full m-1">
        <p className="w-fit max-w-80 px-2 bg-green-bg text-gray-100 text-sm rounded-2xl text-left  break-words hyphens-auto"> {message}  </p>
    </div>
    )
}

export default SendMessageBox;
