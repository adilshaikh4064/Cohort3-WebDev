
import { useEffect, useRef, useState } from "react";
import { ForgotButton, InactiveButton } from "./AllButton";
import {useNavigate} from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { loginSectionState } from "../../Store/NavbarStore";

const OtpCollector=()=>{
    const firstRef=useRef();
    const [first,setFirst]=useState('');
    const secondRef=useRef();
    const[second,setSecond]=useState('');
    const thirdRef=useRef();
    const[third,setThird]=useState('');
    const fourthRef=useRef();
    const[fourth,setFourth]=useState('');

    const forgotRef=useRef(null);
    const [isVerify,setIsVerify]=useState(true);

    const navigate=useNavigate();
    const setIsLoginClicked=useSetRecoilState(loginSectionState);

    useEffect(function(){
        if(first!=='' && second!=='' && third!=='' && fourth!==''){
            setIsVerify(false);
        }
        else setIsVerify(true)
    },[first,second,third,fourth]);

    return (
    <>
    <div className="mt-5 md:mt-6">
        <div class="flex gap-4 mb-4">
            <input 
                placeholder="-" 
                maxlength="1" 
                className=" text-base text-center text-default-title-text bg-secondary border-2 rounded-lg h-14 w-14 appearance-none placeholder:text-secondary-font focus:outline-none hover:outline-none border-mute-active-border hover:border-default-active-border focus:border-default-active-border" 
                data-testid="OTPInputField-0" 
                inputmode="numeric" 
                type="text" 
                pattern="[0-9]"
                value={first}
                ref={firstRef}
                onChange={(event)=>{
                    const newValue=event.target.value;
                    if(/^[0-9]\d*$/.test(newValue)){
                        setFirst(event.target.value);
                        secondRef.current.focus();
                    }
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Backspace'){
                        if(first===''){
                            // forgotRef.current.focus();
                        }
                        else{
                            setFirst('');
                        }
                    }
                }}
            />
            <input 
                placeholder="-" 
                maxlength="1" 
                className=" text-base text-center text-default-title-text bg-secondary border-2 rounded-lg h-14 w-14 appearance-none placeholder:text-secondary-font focus:outline-none hover:outline-none border-mute-active-border hover:border-default-active-border focus:border-default-active-border" 
                data-testid="OTPInputField-0" 
                inputmode="numeric" 
                type="text" 
                pattern="[0-9]"
                value={second}
                ref={secondRef}
                onChange={(event)=>{
                    const newValue=event.target.value;
                    if(/^[0-9]\d*$/.test(newValue)){
                        setSecond(event.target.value);
                        thirdRef.current.focus();
                    }
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Backspace'){
                        if(second===''){
                            firstRef.current.focus();
                        }
                        else{
                            setSecond('');
                        }
                    }
                }}
            />
            <input 
                placeholder="-" 
                maxlength="1" 
                className=" text-base text-center text-default-title-text bg-secondary border-2 rounded-lg h-14 w-14 appearance-none placeholder:text-secondary-font focus:outline-none hover:outline-none border-mute-active-border hover:border-default-active-border focus:border-default-active-border" 
                data-testid="OTPInputField-0" 
                inputmode="numeric" 
                type="text"
                pattern="[0-9]" 
                value={third}
                ref={thirdRef}
                onChange={(event)=>{
                    const newValue=event.target.value;
                    if(/^[0-9]\d*$/.test(newValue)){
                        setThird(event.target.value);
                        fourthRef.current.focus();
                    }
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Backspace'){
                        if(third===''){
                            secondRef.current.focus();
                        }
                        else{
                            setThird('');
                        }
                    }
                }}
            />
            <input 
                placeholder="-" 
                maxlength="1" 
                className=" text-base text-center text-default-title-text bg-secondary border-2 rounded-lg h-14 w-14 appearance-none placeholder:text-secondary-font focus:outline-none hover:outline-none border-mute-active-border hover:border-default-active-border focus:border-default-active-border" 
                data-testid="OTPInputField-0" 
                inputmode="numeric" 
                type="text" 
                value={fourth}
                ref={fourthRef}
                onChange={(event)=>{
                    const newValue=event.target.value;
                    if(/^[0-9]\d*$/.test(newValue)){
                        setFourth(event.target.value);
                    }
                }}
                onKeyDown={(event)=>{
                    if(event.key==='Backspace'){
                        if(fourth===''){
                            thirdRef.current.focus();
                        }
                        else{
                            setFourth('');
                        }
                    }
                }}
            />
        </div>
        <ForgotButton 
            buttonName={'Resend OTP'}
            ref={forgotRef}
            onClick={()=>{
                setFirst('');
                setSecond('');
                setThird('');
                setFourth('');
                firstRef.current.focus();
            }} 
        />
    </div>
    <div className="mt-8 flex">
        <InactiveButton 
            buttonName={'Verify'}
            buttonDisabled={isVerify}
            onClick={()=>{
                navigate("/")
                setIsLoginClicked(prev=>!prev)
            }}
        />
    </div>
    </>
    );
}

export default OtpCollector;
