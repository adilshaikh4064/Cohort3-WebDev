import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { slideMenuState } from "../../../Store/NavbarStore";


const FinalLinkButton=({linkName,urlName})=>{
    const setSlideMenuState=useSetRecoilState(slideMenuState)

    const handleOnclick=function(event){
        setSlideMenuState(prev=>!prev)
        if(urlName.startsWith('https') || urlName.startsWith('http')){
            window.open(urlName,'_blank')
            event.preventDefault();
        }
    }

    return (
    <span className="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
        <Link 
            className="py-1" 
            to={urlName}
            onClick={handleOnclick}
        >
            <div role="button" className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-transparent focus:bg-opacity-80 active:bg-transparent">
                <span class="font-normal text-2xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title">
                    {linkName}
                </span>
            </div>
        </Link>
        </span>
    );
}


export default FinalLinkButton;
