import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginCard from "../Cards/Navbar/LoginCard";
import { useRecoilValue } from "recoil";
import { loginSectionState, slideMenuState } from "../Store/NavbarStore";
import SlidMenu from "../Cards/Navbar/SlideMenu/SlideMenu";
import AosatAdd from "../Cards/AosatAdd";

const Layout = () => {
    const isLoginClicked = useRecoilValue(loginSectionState);
    const isMenuClicked = useRecoilValue(slideMenuState);

    const location=useLocation();
    const hideOutOnRoutes=['/aosat-register','/about-us','/blogs','news']
    const shouldRenderAdd=!hideOutOnRoutes.includes(location.pathname);

    return (
    <>
    <div className="min-h-screen bg-primary relative">
        <Navbar />
        {shouldRenderAdd && (
            <AosatAdd />
        )}
        <div className="bg-red-400 text-4xl font-bold">
            <Outlet />
        </div>

        <Footer />

        {!isLoginClicked && <LoginCard />}
        {!isMenuClicked && <SlidMenu />}
    </div>
    </>
    );
};

export default Layout;
