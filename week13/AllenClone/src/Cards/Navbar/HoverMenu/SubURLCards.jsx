import { NavLink } from "react-router-dom";

const SubURLCard=({linkName,urlName})=>{
    const handleOnclick=function(event){
        if(urlName.startsWith('https') || urlName.startsWith('http')){
            window.open(urlName,'_blank')
            event.preventDefault();
        }
    }
    return (
    <li className='relative contents cursor-default list-none'>
        <div className='flex w-full'>
            <span className='font-normal text-sm no-underline text-default-body-text block w-full'>
                <NavLink
                    to={urlName}
                    onClick={handleOnclick}
                >
                    <div className='flex w-full rounded-md gap-3 bg-secondary py-2.5 pr-3 text-sm hover:bg-primary pl-4'>
                        <span className='font-normal text-sm no-underline text-default-body-text flex flex-1 items-center line-clamp-1 justify-between'> {linkName}</span>
                    </div>
                </NavLink>
            </span>
        </div>
    </li>
    );
}

export default SubURLCard;
