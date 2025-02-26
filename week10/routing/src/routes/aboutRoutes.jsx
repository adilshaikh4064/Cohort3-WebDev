import { Route } from "react-router-dom";
import AboutUs from "../components/aboutUs/aboutUs";
import Blog from "../components/aboutUs/blog";
import News from "../components/aboutUs/news";
import Career from "../components/aboutUs/career";

const AboutRoutes=()=>(
    <>
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="news" element={<News/>} />
        <Route path="career" element={<Career/>} />
    </>
)

export default AboutRoutes;