import bgImage from '../assets/bg.jpg'
import InputBox from './InputBox';
import SendMessageBox from './SendMessageBox';
import RecieveMessageBox from './RecieveMessageBox';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import {messangerOneAtom, messangerTwoAtom} from '../atom';

const ChatBox=({person}:{
    person:string
})=>{
    const messagesEndRef=useRef<HTMLDivElement>(null);
    const messageOne=useRecoilValue(messangerOneAtom);
    const messageTwo=useRecoilValue(messangerTwoAtom);

    const scrollToBottom=function(){
        messagesEndRef.current?.scrollIntoView({'behavior':'instant'})
    }
    useEffect(()=>{
        scrollToBottom();
    },[])

    return (
    <div className="w-full h-full drop-shadow-2xl rounded-2xl">
        <div className="w-full h-[93%] rounded-t-2xl relative">
            <div className='h-full w-full bg-cover bg-center -z-10'>
                <img 
                    src={bgImage} 
                    alt="background-image"
                    className='w-full h-full object-cover rounded-t-2xl'
                />
            </div>
            <div className='w-full h-fit max-h-full overflow-y-auto no-scrollbar absolute top-0'>
                {person === 'firstPerson' && messageOne && messageOne.map((msg, index) =>
                    msg.sender ? (
                        <SendMessageBox key={index} message={msg.text} />
                    ) : (
                        <RecieveMessageBox key={index} message={msg.text} />
                    )
                )}
                {person === 'secondPerson' && messageTwo && messageTwo.map((msg, index) =>
                    msg.sender ? (
                        <SendMessageBox key={index} message={msg.text} />
                    ) : (
                        <RecieveMessageBox key={index} message={msg.text} />
                    )
                )}

                <div ref={messagesEndRef} ></div>
            </div>
        </div>

        <div className="w-full h-[7%] rounded-b-2xl ">
            <InputBox
                person={person}
            />
        </div>
    </div>
    )
}

export default ChatBox;
