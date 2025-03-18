import { useSetRecoilState } from "recoil";
import { loginSectionState } from "../../Store/NavbarStore";
import { useState } from "react";
import InputForm from "./InputForm";
import { ActiveButton, ForgotButton, InactiveButton } from "./AllButton";
import OtpCollector from "./OtpCollector";
import { useNavigate } from "react-router-dom";

const LoginCard=()=>{
    const setIsLoginClicked=useSetRecoilState(loginSectionState);
    const hideLoginCardHandle=function(){
        setIsLoginClicked(prev=>!prev)
    }

    const [contactNumber,setContactNumber]=useState('');
    const [otpButton,setOtpButton]=useState(true);
    const handleChange=function(event){
        const newValue=event.target.value;
        if((/^[6-9]\d*$/.test(newValue) || newValue === "") && newValue.length<=10) {
            setContactNumber(newValue);
        }
        setOtpButton(newValue.length!==10)
    }

    const [emailLogin,setEmailLogin]=useState(false);
    const [formLogin,setFormLogin]=useState(false);
    const [mainLogin,setMainLogin]=useState(true);
    const [otpPage,setOtpPage]=useState(false);

    const [loginEmail,setLoginEmail]=useState(true);
    const [loginForm,setLoginForm]=useState(true);

    const navigate=useNavigate();


    return (
    <div className="inset-0 z-999 fixed">
        <div className="fixed inset-0 overlay bg-opacity-50 transition-opacity duration-300 ease-in-out"></div>
        <div className="fixed right-0 animate-slide-in-from-right no-scrollbar flex h-full overflow-y-scroll ">
            <div 
                className="no-scrollbar container flex w-full flex-1 flex-col bg-secondary px-5 pb-5 pt-8 md:w-125 md:px-12 md:pb-10 md:pt-16 relative"
                style={{maxWidth: "100vw", width: "500px", overflowY:"scroll"}}
            >
                    {/* {Main login section } */}
                    <div className={`${mainLogin?'h-full w-full flex flex-col justify-between':'hidden'}`}>
                        <div className="md:hidden">
                            <div className="flex items-center gap-x-4">
                                <div 
                                className="cursor-pointer"
                                onClick={hideLoginCardHandle} 
                                >
                                <svg fill="none" height="36" viewBox="0 0 16 16" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M12.5507 11.8874C12.5942 11.9309 12.6288 11.9826 12.6523 12.0395C12.6759 12.0964 12.688 12.1574 12.688 12.219C12.688 12.2806 12.6759 12.3416 12.6523 12.3985C12.6288 12.4554 12.5942 12.5071 12.5507 12.5507C12.5071 12.5942 12.4554 12.6288 12.3985 12.6523C12.3416 12.6759 12.2806 12.688 12.219 12.688C12.1574 12.688 12.0964 12.6759 12.0395 12.6523C11.9826 12.6288 11.9309 12.5942 11.8874 12.5507L8.00026 8.66296L4.11315 12.5507C4.02519 12.6386 3.9059 12.688 3.78151 12.688C3.65712 12.688 3.53783 12.6386 3.44987 12.5507C3.36191 12.4627 3.3125 12.3434 3.3125 12.219C3.3125 12.0946 3.36191 11.9753 3.44987 11.8874L7.33757 8.00026L3.44987 4.11315C3.36191 4.02519 3.3125 3.9059 3.3125 3.78151C3.3125 3.65712 3.36191 3.53783 3.44987 3.44987C3.53783 3.36191 3.65712 3.3125 3.78151 3.3125C3.9059 3.3125 4.02519 3.36191 4.11315 3.44987L8.00026 7.33757L11.8874 3.44987C11.9753 3.36191 12.0946 3.3125 12.219 3.3125C12.3434 3.3125 12.4627 3.36191 12.5507 3.44987C12.6386 3.53783 12.688 3.65712 12.688 3.78151C12.688 3.9059 12.6386 4.02519 12.5507 4.11315L8.66296 8.00026L12.5507 11.8874Z" fill="#494A4A" stroke="#494A4A" stroke-width="0.3"></path></svg>
                                </div>
                                <div className="flex items-center">
                                <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
                                </div>
                            </div>
                            <div className="block">
                                <h2 className="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default mt-5 md:mt-5" data-testid="loginFormTitle">
                                    Login with mobile number
                                </h2>
                                <div className="mt-3 md:mt-4">
                                    <div className="flex flex-col flex-wrap gap-2 sm:mb-2">
                                        <div
                                            className="flex appearance-none flex-row flex-nowrap gap-2 border-2 border-mute-active-border bg-secondary placeholder:text-inactive rounded-lg text-sm leading-5 w-full  text-default-body-text cursor-pointer hover:border-default-active-border focus:border-default-active-border"
                                        >
                                            <input
                                                id="mobileNumber"
                                                placeholder="Enter 10-digit mobile number"
                                                className="border-none outline-none placeholder:text-default-body bg-secondary w-full py-3 px-3.5 rounded-lg"
                                                autoCapitalize="false"
                                                data-testid="loginFormTextInput"
                                                type="text" 
                                                maxLength='10'
                                                value={contactNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 md:mt-4 flex">
                                    <button 
                                        className={`text-sm px-5 py-3 max-h-11 border-2 rounded-full focus:opacity-70 ${otpButton?'bg-fill-inactive cursor-not-allowed text-inactive-text':'bg-fill-primary-active cursor-pointer text-static-white-border'} border-transparent  relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold w-full`}
                                        data-testid="submitOTPButton" 
                                        disabled={otpButton}
                                        type="button"
                                        onClick={()=>{
                                            setMainLogin(prev=>!prev)
                                            setOtpPage(prev=>!prev)
                                        }}
                                    >
                                        <div class="items-center flex justify-center text-center">Send OTP</div>
                                    </button>
                                </div>
                                <div className="my-4 flex items-center">
                                    <div className="border-t border-mute-active-border w-full"></div>
                                    <p className="font-medium text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mx-2" >
                                        or
                                    </p>
                                    <div className="border-t border-mute-active-border w-full"></div>
                                </div>
                                <div class=" flex">
                                    <ActiveButton 
                                        buttonName={'Continue with Form ID'}
                                        onClick={()=>{
                                            setMainLogin(prev=>!prev)
                                            setFormLogin(prev=>!prev)
                                        }} 
                                    />
                                </div>
                                <div class="mt-4 md:mt-5 flex">
                                    <ActiveButton 
                                        buttonName={'Continue with Email ID'} 
                                        onClick={()=>{
                                            setMainLogin(prev=>!prev)
                                            setEmailLogin(prev=>!prev)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="md:flex items-center gap-x-4 hidden">
                            <div 
                            className="cursor-pointer"
                            onClick={hideLoginCardHandle} 
                            >
                            <svg fill="none" height="36" viewBox="0 0 16 16" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M12.5507 11.8874C12.5942 11.9309 12.6288 11.9826 12.6523 12.0395C12.6759 12.0964 12.688 12.1574 12.688 12.219C12.688 12.2806 12.6759 12.3416 12.6523 12.3985C12.6288 12.4554 12.5942 12.5071 12.5507 12.5507C12.5071 12.5942 12.4554 12.6288 12.3985 12.6523C12.3416 12.6759 12.2806 12.688 12.219 12.688C12.1574 12.688 12.0964 12.6759 12.0395 12.6523C11.9826 12.6288 11.9309 12.5942 11.8874 12.5507L8.00026 8.66296L4.11315 12.5507C4.02519 12.6386 3.9059 12.688 3.78151 12.688C3.65712 12.688 3.53783 12.6386 3.44987 12.5507C3.36191 12.4627 3.3125 12.3434 3.3125 12.219C3.3125 12.0946 3.36191 11.9753 3.44987 11.8874L7.33757 8.00026L3.44987 4.11315C3.36191 4.02519 3.3125 3.9059 3.3125 3.78151C3.3125 3.65712 3.36191 3.53783 3.44987 3.44987C3.53783 3.36191 3.65712 3.3125 3.78151 3.3125C3.9059 3.3125 4.02519 3.36191 4.11315 3.44987L8.00026 7.33757L11.8874 3.44987C11.9753 3.36191 12.0946 3.3125 12.219 3.3125C12.3434 3.3125 12.4627 3.36191 12.5507 3.44987C12.6386 3.53783 12.688 3.65712 12.688 3.78151C12.688 3.9059 12.6386 4.02519 12.5507 4.11315L8.66296 8.00026L12.5507 11.8874Z" fill="#494A4A" stroke="#494A4A" stroke-width="0.3"></path></svg>
                            </div>
                            <div className="flex items-center md:block">
                            <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <h2 className="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default mt-5 md:mt-5" data-testid="loginFormTitle">
                                Login with mobile number
                            </h2>
                            <div className="mt-3 md:mt-4">
                                <div className="flex flex-col flex-wrap gap-2 sm:mb-2">
                                    <div
                                        className={`flex appearance-none flex-row flex-nowrap gap-2 border-2 border-mute-active-border bg-secondary placeholder:text-inactive rounded-lg text-sm leading-5 w-full  text-default-body-text cursor-pointer hover:border-default-active-border focus:border-default-active-border`}
                                    >
                                        <input
                                            id="mobileNumber"
                                            placeholder="Enter 10-digit mobile number"
                                            className="border-none outline-none placeholder:text-default-body bg-secondary w-full py-3 px-3.5 rounded-lg"
                                            autoCapitalize="false"
                                            data-testid="loginFormTextInput"
                                            type="text"
                                            maxLength='10'
                                            value={contactNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-4 flex">
                                <button 
                                    className={`text-sm px-5 py-3 max-h-11 border-2 rounded-full focus:opacity-70 ${otpButton?'bg-fill-inactive cursor-not-allowed text-inactive-text':'bg-fill-primary-active cursor-pointer text-static-white-border'} border-transparent  relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold w-full`}
                                    data-testid="submitOTPButton" 
                                    disabled={otpButton}
                                    type="button"
                                    onClick={()=>{
                                        setMainLogin(prev=>!prev)
                                        setOtpPage(prev=>!prev)
                                    }}
                                >
                                    <div class="items-center flex justify-center text-center">Send OTP</div>
                                </button>
                            </div>
                            <div className="my-4 flex items-center">
                                <div className="border-t border-mute-active-border w-full"></div>
                                <p className="font-medium text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mx-2" >
                                    or
                                </p>
                                <div className="border-t border-mute-active-border w-full"></div>
                            </div>
                            <div class=" flex">
                                <ActiveButton 
                                    buttonName={'Continue with Form ID'}
                                    onClick={()=>{
                                        setMainLogin(prev=>!prev)
                                        setFormLogin(prev=>!prev)
                                    }} 
                                />
                            </div>
                            <div class="mt-4 md:mt-5 flex">
                            <ActiveButton 
                                buttonName={'Continue with Email ID'} 
                                onClick={()=>{
                                    setMainLogin(prev=>!prev)
                                    setEmailLogin(prev=>!prev)
                                }}
                            />
                            </div>
                        </div>

                        <div className="border-t border-mute-active-border pt-3 tracking-1.5 leading-4.5 ">
                            <span class="font-normal text-2xs leading-3.5 text-xs md:leading-4 no-underline text-default-caption-text cursor-default" data-testid="policyText">
                                {"By continuing you are accepting our "}
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a 
                                        className="font-semibold underline cursor-pointer" 
                                        href="https://allen.in/privacy-policy"
                                        target="_blank"
                                        >privacy policy
                                    </a>
                                </span> 
                                {" and " }
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a 
                                        className="font-semibold underline cursor-pointer" 
                                        href="https://allen.in/tnc"
                                        target="_blank"
                                    >T&amp;C
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>


                    {/* {otp sent section } */}
                    <div className={`${otpPage?'h-full w-full flex flex-col justify-between':'hidden'}`}>
                        <div className="md:hidden">
                                <div className=" items-center gap-x-4 flex">
                                    <div 
                                        class="cursor-pointer"
                                        onClick={()=>{
                                            setMainLogin(prev=>!prev)
                                            setOtpPage(prev=>!prev)
                                        }}
                                    >
                                        <div class="">
                                            <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                                <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="shimmering-image-container flex items-center md:block">
                                            <div class="block">
                                                <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                                    <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-auto"></div>
                                </div>
                                <div className="block mt-8">
                                    <div className="flex items-center justify-between">
                                        <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Enter OTP</h2>
                                    </div>
                                    <p className="inline-block font-normal text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mt-5 mb-3">
                                        {"Sent to  "}
                                        <span class="font-semibold text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text">{`${contactNumber} `}</span>
                                        <span className="inline-block">
                                            <button 
                                                class="text-sm border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer"
                                                data-testid="OTPChangeButton" 
                                                type="button"
                                                onClick={()=>{
                                                    setOtpPage(prev=>!prev)
                                                    setMainLogin(prev=>!prev)
                                                }}
                                            >
                                                <div class="items-center flex">Edit</div>
                                            </button>
                                        </span>
                                    </p>
                                    <OtpCollector/>
                                </div>
                        </div>

                        <div className=" items-center gap-x-4 md:flex hidden">
                            <div 
                                class="cursor-pointer"
                                onClick={()=>{
                                    setMainLogin(prev=>!prev)
                                    setOtpPage(prev=>!prev)
                                }}
                            >
                                <div class="">
                                    <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                        <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div class="shimmering-image-container flex items-center md:block">
                                    <div class="block">
                                        <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                            <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-auto"></div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center justify-between">
                                <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Enter OTP</h2>
                            </div>
                            <p className="inline-block font-normal text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mt-5 mb-3">
                                {"Sent to  "}
                                <span class="font-semibold text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text">{`${contactNumber} `}</span>
                                <span className="inline-block">
                                    <button 
                                        class="text-sm border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer"
                                        data-testid="OTPChangeButton" 
                                        type="button"
                                        onClick={()=>{
                                            setOtpPage(prev=>!prev)
                                            setMainLogin(prev=>!prev)
                                        }}
                                    >
                                        <div class="items-center flex">Edit</div>
                                    </button>
                                </span>
                            </p>
                            <OtpCollector />
                        </div>

                        <div class="border-t border-mute-active-border text-default-caption-text pt-3 tracking-1.5 leading-4.5 " data-testid="havingTroubleText">
                            <span class="font-normal text-2xs leading-3.5 text-xs md:leading-4 no-underline text-default-body-text cursor-default  flex items-center">Having trouble? Write us at 
                                <button class="text-xs border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer" data-testid="dls-button" type="button">
                                    <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
                                    <div class="items-center flex">wecare@allen.in</div>
                                </button>
                            </span>
                        </div>                        
                    </div>

                    {/* {Form login section } */}
                    <div className={`${formLogin?'h-full w-full flex flex-col justify-between':'hidden'}`}>
                        <div className="md:hidden">
                            <div className=" items-center gap-x-4 flex">
                                <div 
                                    class="cursor-pointer"
                                    onClick={()=>{
                                        setMainLogin(prev=>!prev)
                                        setFormLogin(prev=>!prev)
                                    }}
                                >
                                    <div class="">
                                        <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                            <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="shimmering-image-container flex items-center md:block">
                                        <div class="block">
                                            <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                                <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-auto"></div>
                            </div>
                            <div className="block mt-8">
                                <div className="flex items-center justify-between">
                                    <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Login with Form ID</h2>
                                </div>
                                <p className="font-normal text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mt-5 mb-3">
                                    Find your form ID on your  ID card
                                </p>
                                    <InputForm inputType={'text'} placeHolder={'Form ID'} />
                                    <InputForm inputTypeype={'text'} placeHolder={'Password'}  />
                                    <ForgotButton buttonName={'Forgot passwrod?'} />
                                <div class="mt-8 flex">
                                    <InactiveButton 
                                        buttonName={'Login'} 
                                        buttonDisabled={loginForm}
                                        onClick={()=>{
                                            setIsLoginClicked(prev=>!prev);
                                            navigate('/')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" items-center gap-x-4 hidden md:flex">
                            <div 
                                class="cursor-pointer"
                                onClick={()=>{
                                    setMainLogin(prev=>!prev)
                                    setFormLogin(prev=>!prev)
                                }}
                            >
                                <div class="">
                                    <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                        <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div class="shimmering-image-container flex items-center md:block">
                                    <div class="block">
                                        <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                            <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-auto"></div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center justify-between">
                                <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Login with Form ID</h2>
                            </div>
                            <p className="font-normal text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-body-text mt-5">
                                Find your form ID on your  ID card
                            </p>
                                <InputForm inputType={'text'} placeHolder={'Form ID'} />
                                <InputForm inputTypeype={'text'} placeHolder={'Password'}  />
                                <ForgotButton buttonName={'Forgot password?'} />
                            <div class="mt-8 flex">
                                <InactiveButton 
                                    buttonName={'Login'}
                                    buttonDisabled={loginForm}
                                    onClick={()=>{
                                        setIsLoginClicked(prev=>!prev);
                                        navigate('/');
                                    }}
                                />
                            </div>
                        </div>

                        <div class="border-t border-mute-active-border text-default-caption-text pt-3 tracking-1.5 leading-4.5 " data-testid="havingTroubleText">
                            <span class="font-normal text-2xs leading-3.5 text-xs md:leading-4 no-underline text-default-body-text cursor-default  flex items-center">Having trouble? Write us at 
                                <button class="text-xs border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer" data-testid="dls-button" type="button">
                                    <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
                                    <div class="items-center flex">wecare@allen.in</div>
                                </button>
                            </span>
                        </div>
                    </div>

                    {/* {email login section } */}
                    <div className={`${emailLogin?'h-full w-full flex flex-col justify-between':'hidden'}`}>
                        <div className="md:hidden">
                            <div className=" items-center gap-x-4 flex">
                                <div 
                                    class="cursor-pointer"
                                    onClick={()=>{
                                        setMainLogin(prev=>!prev)
                                        setEmailLogin(prev=>!prev)
                                    }}
                                >
                                    <div class="">
                                        <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                            <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="shimmering-image-container flex items-center md:block">
                                        <div class="block">
                                            <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                                <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-auto"></div>
                            </div>
                            <div className="block mt-8">
                                <div className="flex items-center justify-between">
                                    <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Login with Email ID</h2>
                                </div>
                                <div className="mt-5 md:mt-6">
                                    <InputForm inputType={'text'} placeHolder={'Email'} />
                                    <InputForm inputTypeype={'text'} placeHolder={'Password'}  />
                                    <ForgotButton buttonName={'Forgot password?'} />
                                </div>
                                <div class="mt-8 flex">
                                    <InactiveButton 
                                        buttonName={'Login'} 
                                        buttonDisabled={loginEmail}
                                        onClick={()=>{
                                            setIsLoginClicked(prev=>!prev);
                                            navigate('/')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>                     
                        
                        <div class=" items-center gap-x-4 hidden md:flex">
                            <div 
                                class="cursor-pointer"
                                onClick={()=>{
                                    setMainLogin(prev=>!prev)
                                    setEmailLogin(prev=>!prev)}}
                            >
                                <div class="">
                                    <svg fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                        <path d="M20.4999 12H3.66992" stroke="#494A4A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div class="shimmering-image-container flex items-center md:block">
                                    <div class="block">
                                        <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7">
                                            <path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-auto"></div>
                        </div>
                        <div class="hidden md:block">
                            <div class="flex items-center justify-between">
                                <h2 class="font-bold text-base leading-5 md:text-xl md:leading-6.5 no-underline text-default-title-text cursor-default" data-testid="usernameLoginFormTitle">Login with email ID</h2>
                            </div>
                            <div class="mt-5 md:mt-6">
                                <InputForm inputType={'email'} placeHolder={'Email'} />
                                <InputForm inputType={'text'} placeHolder={'Password'} />
                                <ForgotButton buttonName={'Forgot password?'} />
                            </div>
                            <div class="mt-8 flex">
                                <InactiveButton 
                                    buttonName={'Login'}
                                    buttonDisabled={loginEmail}
                                    onClick={()=>{
                                        setIsLoginClicked(prev=>!prev)
                                        navigate('/');
                                    }}
                                />
                            </div>
                        </div>

                        <div class="border-t border-mute-active-border text-default-caption-text pt-3 tracking-1.5 leading-4.5 " data-testid="havingTroubleText">
                            <span class="font-normal text-2xs leading-3.5 text-xs md:leading-4 no-underline text-default-body-text cursor-default  flex items-center">Having trouble? Write us at 
                                <button class="text-xs border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer" data-testid="dls-button" type="button">
                                    <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
                                    <div class="items-center flex">wecare@allen.in</div>
                                </button>
                            </span>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>

    );
}

export default LoginCard;