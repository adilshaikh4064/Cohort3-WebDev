import { useRecoilState} from "recoil";
import LinkCards from "../Cards/Navbar/LinkCards";
import { loginSectionState, slideMenuState } from "../Store/NavbarStore";
import { Link } from "react-router-dom";


const Navbar=()=>{
    const [isLoginClicked,setLoginClicked]=useRecoilState(loginSectionState);
    const [isMenuClicked,setIsMenuClicked]=useRecoilState(slideMenuState);


    return (
    <header className="h-17 2xl:min-h-auto sticky z-999 top-0 bg-secondary ">
        <div className="h-full 2xl:min-h-auto container sticky top-0 z-101 cursor-default items-stretch justify-between lg:py-0 flex lg:pr-28 lg:pl-28 m-auto max-w-360 py-1.5 px-8">
            <div className="flex items-center lg:gap-x-8 pr-10">
                <div 
                    class="mr-2 cursor-pointer self-center lg:hidden" 
                    data-testid="menuIcon"
                    type="button"
                    aria-hidden={isMenuClicked}
                    onClick={()=>setIsMenuClicked(isMenuClicked=>!isMenuClicked)}
                >
                    <svg class="" data-testid="MenuIcon" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <div className="lg:h-7 h-5">
                    <Link 
                    to={'/'} 
                    className="cursor-pointer hidden lg:block"
                    >
                        <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" className="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
                    </Link>
                    <Link 
                        to={'/'} 
                        className="cursor-pointer lg:hidden contents"
                    >
                        <svg width="72" height="16" viewBox="0 0 115 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-5"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg>
                    </Link>
                </div>
                <nav className="h-full flex-row lg:flex hidden">
                    <ul className="h-full flex justify-center items-center gap-x-8 self-end">
                        <LinkCards linkName={"Courses"} />
                        <LinkCards linkName={"Test Series"} />
                        <LinkCards linkName={"Scholarships"} />
                        <LinkCards linkName={"Results"} />
                        <LinkCards linkName={"Study Materials"} />
                        <LinkCards linkName={"About Us"} />
                    </ul>
                </nav>
            </div>

            <div className="relative flex items-center justify-end gap-x-4 py-1.5">
                <nav className="h-full flex flex-row">
                    <ul className="h-full flex justify-center items-center gap-x-8 self-end">
                        <LinkCards linkName={"Caller"} />
                    </ul>
                </nav>

                <div className="h-full flex justify-center items-center">
                    <button 
                        className="text-xs px-3.5 py-2 max-h-9 border-2 rounded-full border-brand-active-border text-default-title-text flex justify-center items-center text-center font-extrabold focus:opacity-70 transition duration-500 ease-in-out cursor-pointer hover:bg-fill-tertiary-active " 
                        type="button"
                        aria-hidden={isLoginClicked}
                        onClick={()=>(setLoginClicked(isLoginClicked=>!isLoginClicked))}
                    >
                        <div className="flex items-center">Login</div>
                    </button>
                </div>
            </div>
        </div>
    </header>
    );
}


export default Navbar;
