import { Link } from "react-router-dom";
import SlideMenuMainButton from "./SildeMenuMainButton";
import { useSetRecoilState } from "recoil";
import { loginSectionState, slideMenuState } from "../../../Store/NavbarStore";

const SlidMenu = () => {
  const setSlideMenu=useSetRecoilState(slideMenuState);
  const setLoginSection=useSetRecoilState(loginSectionState);


  return (
    <div className="inset-0 z-999 fixed lg:hidden">
      <div className="fixed inset-0 overlay bg-opacity-50 transition-opacity duration-300 ease-in-out">
        <div className="fixed left-0 animate-slide-in-from-left no-scrollbar h-full overflow-y-scroll flex flex-col w-5/6 md:w-1/2 bg-primary !overflow-hidden">
          <div className="sticky top-0 z-20 flex justify-between bg-primary pl-4 py-8 shadow-md">
            <div className="flex self-center">
              <span className="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                <Link 
                  to={"/"}
                  onClick={()=>setSlideMenu(prev=>!prev)}
                >
                  <div className="shimmering-image-container flex items-center md:block">
                    <div className="block">
                      <svg
                        width="72"
                        height="16"
                        viewBox="0 0 91 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Allen logo"
                        data-testid="onboardingAllenLogo"
                        className="w-23 h-5"
                      >
                        <path
                          d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z"
                          fill="#005BAA"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </span>
            </div>
            <div className="mx-4 self-center ">
              <button
                className="text-base  border-2 rounded-full focus:opacity-70  bg-transparent border-transparent text-default-title-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer"
                data-testid="closeIcon"
                type="button"
                onClick={()=>setSlideMenu(prev=>!prev)}
              >
                <div className="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
                <div className="items-center flex">
                  <div className="ml-2">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75734 7.75739L16.2426 16.2427"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M7.75736 16.2427L16.2426 7.75739"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="no-scrollbar overflow-y-scroll pb-20 ">
            <div>
              <SlideMenuMainButton buttonName={"Courses"} />
              <SlideMenuMainButton buttonName={"Test Series"} />
              <SlideMenuMainButton buttonName={"Scholarships"} />
              <SlideMenuMainButton buttonName={"Results"} />
              <SlideMenuMainButton buttonName={"Study Materials"} />
              <SlideMenuMainButton buttonName={"About Us"} />
            </div>
          </div>

          <div className="fixed bottom-0  left-0 z-20 mt-8 inline-flex h-8 w-full items-center bg-primary pl-4 py-8 shadow-md">
            <button
              class="text-sm border-2 rounded-full focus:opacity-70  border-transparent text-active-text active:text-static-white-text relative flex items-center justify-center text-center transition duration-500 ease-in-out font-bold cursor-pointer"
              data-testid="ctaButton"
              type="button"
              onClick={()=>{
                setLoginSection(prev=>!prev)
                setSlideMenu(prev=>!prev)
              }}
            >
              <div class="size-5 animate-spin rounded-full border-2 border-t-transparent border-fill-primary-active hidden"></div>
              <div class="items-center flex">Login</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidMenu;
