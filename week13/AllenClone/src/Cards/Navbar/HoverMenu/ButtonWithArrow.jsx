import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import SubURLCard from './SubURLCards';

const ButtonWithArrow=({buttonName,urlPath,children})=>{
    const [isOpen,setIsOpen]=useState(false);

    return (
    <li 
        className='block cursor-default relative'
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={()=>(setIsOpen(isOpen=>!isOpen))}
        onMouseEnter={()=>(setIsOpen(true))}
        onMouseLeave={()=>(setIsOpen(false))}
    >
        <div className="px-2">
            <div className="flex w-full">
                <div className="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text w-full">
                <NavLink
                    to={urlPath??'#'}
                    onClick={(e)=>{if(!urlPath) e.preventDefault()}}
                >
                    <div className={`flex bg-secondary rounded-md gap-3 py-2.5 pr-3 text-sm pl-4 hover:bg-primary ${(buttonName==='Requst a call back' || buttonName==='Book home demo')&&'pl-3'}`}>
                            
                            {(buttonName==='Request a call back') && (
                                <>
                                <div className="flex size-6 items-center justify-center rounded-full md:bg-fill-secondary-active"><svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1.83346 12.4333C1.56012 12.4333 1.33346 12.2067 1.33346 11.9333V8.13333C1.30012 6.32667 1.97346 4.62 3.22679 3.34C4.48012 2.06667 6.16012 1.36667 7.96679 1.36667C11.6601 1.36667 14.6668 4.37334 14.6668 8.06667V11.8667C14.6668 12.14 14.4401 12.3667 14.1668 12.3667C13.8935 12.3667 13.6668 12.14 13.6668 11.8667V8.06667C13.6668 4.92667 11.1135 2.36667 7.96679 2.36667C6.42679 2.36667 5.00012 2.96 3.94012 4.04C2.87346 5.12667 2.30679 6.57334 2.33346 8.12V11.9267C2.33346 12.2067 2.11346 12.4333 1.83346 12.4333Z" fill="#0266DA"></path><path d="M3.96016 8.29999H3.8735C2.4735 8.29999 1.3335 9.43999 1.3335 10.84V12.0933C1.3335 13.4933 2.4735 14.6333 3.8735 14.6333H3.96016C5.36016 14.6333 6.50016 13.4933 6.50016 12.0933V10.84C6.50016 9.43999 5.36016 8.29999 3.96016 8.29999Z" fill="#0266DA"></path><path d="M12.1267 8.29999H12.04C10.64 8.29999 9.5 9.43999 9.5 10.84V12.0933C9.5 13.4933 10.64 14.6333 12.04 14.6333H12.1267C13.5267 14.6333 14.6667 13.4933 14.6667 12.0933V10.84C14.6667 9.43999 13.5267 8.29999 12.1267 8.29999Z" fill="#0266DA"></path></svg></div>
                                </>
                            )}
                            {(buttonName==='Book home demo')&&(
                                <>
                                <div className="flex size-6 items-center justify-center rounded-full md:bg-fill-secondary-active"><svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.71332C10 4.26665 9.78 3.85332 9.40667 3.60665L6.74 1.82665C6.29333 1.52665 5.70667 1.52665 5.26 1.82665L2.59333 3.60665C2.22667 3.85332 2 4.26665 2 4.71332V8.49999C2 8.68665 2.14667 8.83332 2.33333 8.83332H9.66667C9.85333 8.83332 10 8.68665 10 8.49999V4.71332ZM6 7.16665C5.36 7.16665 4.83333 6.63999 4.83333 5.99999C4.83333 5.35999 5.36 4.83332 6 4.83332C6.64 4.83332 7.16667 5.35999 7.16667 5.99999C7.16667 6.63999 6.64 7.16665 6 7.16665Z" fill="#0266DA"></path><path d="M14.6666 14.1667H13.8199V12.1667C14.4533 11.96 14.9133 11.3667 14.9133 10.6667V9.33334C14.9133 8.46001 14.1999 7.74667 13.3266 7.74667C12.4533 7.74667 11.7399 8.46001 11.7399 9.33334V10.6667C11.7399 11.36 12.1933 11.9467 12.8133 12.16V14.1667H9.99992V10.1667C9.99992 9.98001 9.85325 9.83334 9.66658 9.83334H2.33325C2.14659 9.83334 1.99992 9.98001 1.99992 10.1667V14.1667H1.33325C1.05992 14.1667 0.833252 14.3933 0.833252 14.6667C0.833252 14.94 1.05992 15.1667 1.33325 15.1667H13.2866C13.2999 15.1667 13.3066 15.1733 13.3199 15.1733C13.3333 15.1733 13.3399 15.1667 13.3533 15.1667H14.6666C14.9399 15.1667 15.1666 14.94 15.1666 14.6667C15.1666 14.3933 14.9399 14.1667 14.6666 14.1667ZM5.49992 12.1667C5.49992 11.8933 5.72658 11.6667 5.99992 11.6667C6.27325 11.6667 6.49992 11.8933 6.49992 12.1667V14.1667H5.49992V12.1667Z" fill="#0266DA"></path></svg></div>
                                </>
                            )}
                            
                            <span className="font-normal text-sm no-underline text-default-body-text flex flex-1 items-center justify-between line-clamp-1">
                                {buttonName}
                                <svg fill="none" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </svg>
                            </span>  
                    </div>
                </NavLink>
                </div>
            </div>
        </div>
        
        {children && (
            <ul className={`absolute z-9999 left-[100%] top-1 pl-2.5 duration-300 w-fit flex-row ${(isOpen)?'flex animate-fade-in':'hidden animate-fade-out'} `}>
                <div className='relative w-60 rounded-xl bg-secondary p-2 shadow-md'>
                    {
                        children.map((child,index)=>(
                            <SubURLCard key={index} linkName={child[0]} urlName={child[1]} />
                        ))
                    }
                </div>
            </ul>
        )}
    </li>
    );
}


export default ButtonWithArrow;
