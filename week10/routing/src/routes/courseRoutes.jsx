import { Route } from "react-router-dom";
import Class6to10 from "../components/courses/class6-10/class6-10";
import Class6 from "../components/courses/class6-10/class-6";
import Class7 from "../components/courses/class6-10/class-7";
import Class8 from "../components/courses/class6-10/class-8";
import Class9 from "../components/courses/class6-10/class-9";
import Class10 from "../components/courses/class6-10/class-10";
import Neet11 from "../components/courses/neet/neet-class-11";
import Neet12 from "../components/courses/neet/neet-class-12";
import Neet12Pass from "../components/courses/neet/neet-class-12pass";
import Neet from "../components/courses/neet/neet";
import Jee from "../components/courses/jee/jee";
import Jee11 from "../components/courses/jee/jee-class-11";
import Jee12 from "../components/courses/jee/jee-class-12";
import Jee12Pass from "../components/courses/jee/jee-class-12pass";
import OnlineCourses from "../components/courses/onlineCourses";

const CourseRoutes = () => (
    <>
        <Route path="neet">
            <Route index element={<Neet/>} />
            <Route path="class-11" element={<Neet11/>} />
            <Route path="class-12" element={<Neet12/>} />
            <Route path="class-12-pass" element={<Neet12Pass/>} />
        </Route>

        <Route path="jee">
            <Route index element={<Jee/>} />
            <Route path="class-11" element={<Jee11/>} />
            <Route path="class-12" element={<Jee12/>} />
            <Route path="class-12-pass" element={<Jee12Pass/>} />
        </Route>

        <Route path="class-6-10">
            <Route index element={<Class6to10/>}/>
            <Route path="class-6" element={<Class6/>} />
            <Route path="class-7" element={<Class7/>} />
            <Route path="class-8" element={<Class8/>} />
            <Route path="class-9" element={<Class9/>} />
            <Route path="class-10" element={<Class10/>} />
        </Route>

        <Route path="view-all-options">
            <Route path="online-courses" element={<OnlineCourses/>}/>
            <Route path="classroom-courses" />
            <Route path="distance-learning" />
        </Route>
    </>
);


export default CourseRoutes;