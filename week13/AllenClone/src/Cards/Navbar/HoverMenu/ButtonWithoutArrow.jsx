import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';

const ButtonWithoutArrow=({buttonName,urlPath})=>{
    const [isOpen,setIsOpen]=useState(false);

    const handleNavLinkClick=function(event){
        if (urlPath === 'careers') {
            window.open('https://allendigital.hire.trakstar.com/', '_blank');
            event.preventDefault();
        }
        if(!urlPath) event.preventDefault();
    }

    return (
    <li 
        className='contents cursor-default relative'
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={()=>(setIsOpen(isOpen=>!isOpen))}
    >
        <div className="px-2">
            <div className="flex w-full">
                <div className="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text w-full">
                <NavLink
                    to={urlPath??'#'}
                    onClick={handleNavLinkClick}
                >
                    <div className='flex hover:bg-primary bg-secondary rounded-md gap-3 py-2.5 pr-3 text-sm pl-4 cursor-pointer'>
                            <span className="font-normal text-sm no-underline text-default-body flex flex-1 items-center justify-between line-clamp-1">
                                {buttonName}
                            </span>  
                    </div>
                </NavLink>
                </div>
            </div>
        </div>
    </li>
    );
}


export default ButtonWithoutArrow;