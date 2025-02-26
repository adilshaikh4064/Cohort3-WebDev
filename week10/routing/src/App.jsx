import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CourseRoutes from "./routes/courseRoutes";
import TestRoutes from "./routes/testRoutes";
import ScholarshipRoutes from "./routes/scholarshipRoutes";
import StudyMaterialRoutes from "./routes/studyMaterialRoutes";
import ResultRoutes from "./routes/resultsRoutes";
import AboutRoutes from "./routes/aboutRoutes";

const Layout=()=>(
  <>
  <div><h1>Navigation Bar</h1></div>
  <Outlet/>
  <div><h1>Footer Bar</h1></div>
  </>
)
const Home=()=>(
  <> this is home page </>
)
const Courses=()=>(
  <>
  <h2>this is course page</h2>
  </>
)
const TestSeries=()=>(
  <>
  <h2>this is test series page</h2>
  </>
)
const TalkToUs=()=>(
  <Outlet/>
)
const CallBack=()=>(
  <> CallBack </>
)
const HomeDemo=()=>(
  <> HomeDemo </>
)

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<Home/>}/>

        {CourseRoutes()}
        {TestRoutes()}
        {ScholarshipRoutes()}
        {StudyMaterialRoutes()}
        {ResultRoutes()}
        {AboutRoutes()}

        <Route path="courses" element={<Courses/>} />
        <Route path="test-series" element={<TestSeries/>} />
        
        <Route element={<TalkToUs/>}>
          <Route path="call-back" element={<CallBack/>} />
          <Route path="home-demo" element={<HomeDemo/>} />
        </Route>
      </Route>
    </Routes>
  </>
);

export default App;
