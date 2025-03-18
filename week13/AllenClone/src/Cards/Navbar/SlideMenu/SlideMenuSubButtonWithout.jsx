import { Link, NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { slideMenuState } from "../../../Store/NavbarStore";

const SlideMenuSubButtonWithout=({buttonName,urlPath})=>{
    const setSlideMenu=useSetRecoilState(slideMenuState);

    const handleLinkClick=function(event){
        setSlideMenu(prev=>!prev)
        if (urlPath === 'careers') {
            window.open('https://allendigital.hire.trakstar.com/', '_blank');
            event.preventDefault();
        }
    }

    return (
    <div className="block relative w-full p-0 px-5 border-opactiy-10 border-mute-active-border">
        <NavLink
            className="flex justify-between items-center w-full antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors border-b-0 py-2" 
            aria-expanded="false"
            to={urlPath}
            onClick={handleLinkClick}
        >
            <span class="font-semibold text-xs no-underline text-default-title-text">{buttonName}</span>
            <span class="ml-4"></span>
        </NavLink>

    </div>
    );  
}


export default SlideMenuSubButtonWithout;
