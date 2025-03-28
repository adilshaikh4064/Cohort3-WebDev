

const Button=({buttonDisabled,buttonClick}:
    {
        buttonDisabled:boolean
        buttonClick:()=>void
    }
)=>{

    return (
    <div className={`w-[80%] h-[80%] flex justify-center items-center rounded-full transition-colors duration-300 ${buttonDisabled?'cursor-not-allowed bg-input-bg':'cursor-pointer bg-green-bg'}`}>
        <button 
            className={`h-full w-full flex justify-center items-center ${buttonDisabled?'cursor-not-allowed':'cursor-pointer'} pl-1`}
            disabled={buttonDisabled}
            onClick={buttonClick}
        >
            <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/20/sent.png" alt="sent"/>
        </button>
    </div>
    )
}

export default Button;
