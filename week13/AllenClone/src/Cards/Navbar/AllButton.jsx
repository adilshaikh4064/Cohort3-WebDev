import { forwardRef } from "react";

const ForgotButton=forwardRef(({buttonName,onClick},ref)=>{

    return (
    <>
    <button 
        class={`text-xs border-2 rounded-full focus:text-xl focus:outline-1 focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer hover:bg-fill-tertiary-active`} 
        data-testid="usernameLoginFormForgot" 
        type="button"
        ref={ref}
        onClick={onClick}
    >
        <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
        <div class="items-center flex">{buttonName}</div>
    </button>
    </>
    );
})

const InactiveButton=({buttonName,buttonDisabled,onClick})=>{


    return (
    <>
    <button 
        className={`text-sm px-5 py-3 max-h-11  border-2 rounded-full focus:opacity-70 border-transparent relative ${buttonDisabled?'bg-fill-inactive cursor-not-allowed text-inactive-text':'bg-fill-primary-active cursor-pointer text-static-white-border'} flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-not-allowed w-full `}data-testid="usernameLoginFormButtonMweb" 
        disabled={buttonDisabled} 
        type="button"
        onClick={onClick}
    >
                <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-secondary hidden"></div>
                <div class="items-center flex">{buttonName}</div>
    </button>
    </>
    );
}
const ActiveButton=({buttonName,onClick})=>{


    return (
    <>
    <button 
        class="text-sm px-5 py-3 max-h-11 relative border-2 rounded-full focus:opacity-70  border-brand-active-border text-default-title-text flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer w-full hover:bg-fill-tertiary-active focus:bg-fill-tertiary-active" 
        data-testid="FormIdLoginButtonWeb" 
        type="button"
        onClick={onClick}
    >
        <div class="items-center flex">{buttonName}</div>
    </button>
    </>
    );
}

export{
    ForgotButton,
    InactiveButton,
    ActiveButton
}