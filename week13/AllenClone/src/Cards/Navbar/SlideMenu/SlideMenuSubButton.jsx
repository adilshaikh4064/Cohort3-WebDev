
import FinalLinkButton from "./FinalLinkButton";
import { useRecoilState } from "recoil";
import { buttonStateFamily} from "../../../Store/NavbarStore";


const SlideMenuSubButton=({buttonName,children,parent})=>{
    const [buttonsState,setButtonsState]=useRecoilState(buttonStateFamily(parent));

    const handleOnClick=function(buttonClicked){
        setButtonsState((prevState)=>{
            const isCurrentlyActive=prevState[buttonClicked];
            return Object.fromEntries(
                Object.keys(prevState).map(key=>[key,isCurrentlyActive?false:key===buttonClicked])
            )
        })
    }

    return (
    <div className={`block relative w-full p-0 px-5 border-opactiy-10 border-mute-active-border`}>
        <button 
            className="flex justify-between items-center w-full antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors border-b-0 py-2" 
            aria-expanded={buttonsState[buttonName]}
            onClick={()=>{
                handleOnClick(buttonName)
            }}
        >
            <span class="font-semibold text-xs no-underline text-default-title-text">{buttonName}</span>
            <span class="ml-4">
                <svg class={`text-default-title h-4 w-4 transition-transform ${buttonsState[buttonName]?'rotate-180':''}`} data-testid="KeyboardArrowDownIcon" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
            </span>
        </button>

        <div className={`overflow-hidden transition-[grid-template-rows] duration-300 antialiased ease-in-out ${buttonsState[buttonName]?'grid-rows-[1fr]':'grid-rows-[0fr]'}`}>
            <div className={`overflow-hidden w-full transition-all duration-200 antialiased ease-in-out border-l border-mute-active-border border-opacity-10 px-2 py-0 ${buttonsState[buttonName]?'block':'hidden'}`}>
            {
                children.map((child,index)=>(
                    <FinalLinkButton key={index} linkName={child[0]} urlName={child[1]} />
                ))
            }
            </div>
        </div>
    </div>
    );  
}


export default SlideMenuSubButton;
