import React, { useEffect } from "react";
import Button from "./Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { inputValueOneAtom, inputValueTwoAtom, messangerOneAtom, messangerTwoAtom } from "../atom";
import { socketOne, socketTwo } from "../sockets";

const InputBox = ({ person }: { person: string }) => {
    const [inputValue, setInputValue] = useRecoilState(person === 'firstPerson' ? inputValueOneAtom : inputValueTwoAtom);
    const setMessagesOne = useSetRecoilState(messangerOneAtom);
    const setMessagesTwo = useSetRecoilState(messangerTwoAtom);

    useEffect(function(){
        const socket=person==='firstPerson'?socketOne:socketTwo;
        const handleMessage=(event:MessageEvent)=>{
            if(person==='firstPerson'){
                setMessagesOne(prev=>[...prev,{sender:false, text:event.data}]);
            }
            else{
                setMessagesTwo(prev=>[...prev,{sender:false,text:event.data}]);
            }
        }
        socket.addEventListener('message',handleMessage)

        return function(){
            socket.removeEventListener('message',handleMessage)
        }
    },[person,setMessagesOne,setMessagesTwo])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    }

    const handleButtonClick = () => {
        if (inputValue.trim() !== '') {
            if (person === 'firstPerson') {
                socketOne.send(inputValue);
                setMessagesOne(prev => [...prev, { sender: true, text: inputValue }]);
            } else {
                socketTwo.send(inputValue);
                setMessagesTwo(prev => [...prev, { sender: true, text: inputValue }]);
            }
            setInputValue('');
        }
    }

    return (
        <div className="h-full w-full rounded-b-2xl bg-inputDiv-bg flex gap-2 justify-center items-center px-4 py-2">
            <div className="h-full w-[90%] border-1 border-gray-600 bg-input-bg px-4 rounded-4xl">
                <input
                    type="text"
                    placeholder=""
                    value={inputValue}
                    className="h-full w-full appearance-none outline-none border-none caret-green-500 text-sm"
                    onKeyDown={handleKeyDown}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </div>

            <div className="h-full w-[10%] flex justify-center items-center">
                <Button
                    buttonDisabled={inputValue.trim() === ""}
                    buttonClick={handleButtonClick}
                />
            </div>
        </div>
    )
}

export default InputBox;