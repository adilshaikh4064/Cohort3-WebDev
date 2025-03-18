

const InputForm=({inputType,placeHolder})=>{


    return (
    <>
    <div class="flex flex-col flex-wrap gap-2 sm:mb-2 mb-2">
        <div
            class="flex appearance-none flex-row flex-nowrap gap-2 border-2 bg-secondary placeholder:text-inactive-text -hover:outline-none focus:outline-none rounded-lg text-sm leading-5 w-full border-mute-active-border text-default-body-text hover:border-default-active-border focus:border-default-active-border"
        >
            <input 
                id="username" 
                placeholder={placeHolder}
                class="border-none outline-none  placeholder:text-default-body-text bg-secondary w-full py-3 px-3.5 rounded-lg" autocomplete="false" 
                data-testid="username" 
                type={inputType} 
                value="" 
                name="username"
            />
            {placeHolder==='Password' && (   
                <div class="mr-4 flex cursor-pointer items-center">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/bold/eye-slash">
                    <path d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z" fill="currentColor" id="Vector"></path>
                    <path d="M14.02 9.98014L9.98001 14.0201C9.47001 13.5001 9.14001 12.7801 9.14001 12.0001C9.14001 10.4301 10.42 9.14014 12 9.14014C12.78 9.14014 13.5 9.47014 14.02 9.98014Z" fill="currentColor" id="Vector_2"></path>
                    <path d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z" fill="currentColor" id="Vector_3"></path>
                    <path d="M14.86 12.0001C14.86 13.5701 13.58 14.8601 12 14.8601C11.94 14.8601 11.89 14.8601 11.83 14.8401L14.84 11.8301C14.86 11.8901 14.86 11.9401 14.86 12.0001Z" fill="currentColor" id="Vector_4"></path>
                    <path d="M21.77 2.22988C21.47 1.92988 20.98 1.92988 20.68 2.22988L2.23 20.6899C1.93 20.9899 1.93 21.4799 2.23 21.7799C2.38 21.9199 2.57 21.9999 2.77 21.9999C2.97 21.9999 3.16 21.9199 3.31 21.7699L21.77 3.30988C22.08 3.00988 22.08 2.52988 21.77 2.22988Z" fill="currentColor" id="Vector_5"></path>
                    </g>
                    </svg>
                </div>
            )}
        </div>
    </div>
    </>
    );
}


export default InputForm;
