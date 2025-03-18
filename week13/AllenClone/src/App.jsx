import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import Layout from './Components/Layout';
import JuniorClassesCourses from './Components/JuniorClassesCourses';
import ViewAllCoursesOptions from './Components/ViewAllCoursesOptions';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import Courses from './Components/Courses';
import NeetResults from './Components/NeetResults';
import JeeMainTestSeries from './Components/TestSeries/JeeMainTestSeries';
import JeeTestSeries, { JeeTestIndex } from './Components/TestSeries/JeeTestSeries';
import NeetTestSeries, { NeetTestIndex } from './Components/TestSeries/NeetTestSeries';
import CuetTestSeries from './Components/TestSeries/Cuet/CuetTestSeries';
import OlympiadExam from './Components/StudyMaterials/OlympiadExam';
import IMO from './Components/StudyMaterials/Olympiad/IMO';
import NSO from './Components/StudyMaterials/Olympiad/NSO';
import NMTC from './Components/StudyMaterials/Olympiad/NMTC';
import NeetExam from './Components/StudyMaterials/NeetExam';
import NeetPrevPapers from './Components/StudyMaterials/Neet/NeetPrevPapers';
import NeetSamplePapers from './Components/StudyMaterials/Neet/NeetSamplePapers';
import NeetMockTests from './Components/StudyMaterials/Neet/NeetMockTests';
import NeetResults2024 from './Components/Results/Neet/NeetResults2024';
import NeetAnalysis from './Components/StudyMaterials/Neet/NeetAnalysis';
import NeetSyllabus from './Components/StudyMaterials/Neet/NeetSyllabus';
import NeetExamDate from './Components/StudyMaterials/Neet/NeetExamDate';
import NcertSolution from './Components/StudyMaterials/NcertSolution';
import NcertClass6Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass6Soltion';
import NcertClass7Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass7Soltion';
import NcertClass8Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass8Soltion';
import NcertClass10Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass10Soltion';
import NcertClass11Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass11Soltion';
import NcertClass9Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass9Soltion';
import NcertClass12Solution from './Components/StudyMaterials/NCERTSolutions/NCERTClass12Soltion';
import JeeMainExam from './Components/StudyMaterials/JeeMainExam';
import JeeMainPrevPapers from './Components/StudyMaterials/JeeMain/JeeMainPrevPapers';
import JeeMainSamplePapers from './Components/StudyMaterials/JeeMain/JeeMainSamplePapers';
import JeeMainResults from './Components/StudyMaterials/JeeMain/JeeMainResults';
import JeeMainAnalysis from './Components/StudyMaterials/JeeMain/JeeMainAnalysis';
import JeeMainSyllabus from './Components/StudyMaterials/JeeMain/JeeMainSyllabus';
import JeeMainExamDate from './Components/StudyMaterials/JeeMain/JeeMainExamDate';
import JeeAdvExam from './Components/StudyMaterials/JeeAdvExam';
import JeeAdvPrevPapers from './Components/StudyMaterials/JeeAdvanced/JeeAdvPrevPapers';
import JeeAdvSamplePapers from './Components/StudyMaterials/JeeAdvanced/JeeAdvSamplePapers';
import JeeAdvMockTests from './Components/StudyMaterials/JeeAdvanced/JeeAdvMockTests';
import JeeAdvResults from './Components/StudyMaterials/JeeAdvanced/JeeAdvResults';
import JeeAdvAnalysis from './Components/StudyMaterials/JeeAdvanced/JeeAdvAnalysis';
import JeeAdvSyllabus from './Components/StudyMaterials/JeeAdvanced/JeeAdvSyllabus';
import JeeAdvExamDate from './Components/StudyMaterials/JeeAdvanced/JeeAdvExamDate';
import CbseExam from './Components/StudyMaterials/CbseExam';
import CbseNotes from './Components/StudyMaterials/CBSE/CBSEnotes';
import CbseSamplePapers from './Components/StudyMaterials/CBSE/CBSEsamplePapers';
import CbseQuestionPapers from './Components/StudyMaterials/CBSE/CBSEquestionPapers';
import Scholarship from './Components/Scholarships/Scholarship';
import Home from './Components/Home';
import CallBack from './Components/ContactUs/CallBack';
import HomeDemo from './Components/ContactUs/HomeDemo';
import AboutUs from './Components/AboutUs/AboutUs';
import Blogs from './Components/AboutUs/Blogs';
import News from './Components/AboutUs/News';
import JeeCourses from './Components/Courses/JeeCourses';
import JeeClass11Courses from './Components/Courses/Jee/JeeClass11Courses';
import JeeClass12Courses from './Components/Courses/Jee/JeeClass12Courses';
import JeeClass12DropperCourses from './Components/Courses/Jee/JeeClass12DropperCourses';
import NeetCourses from './Components/Courses/NeetCourses';
import NeetClass11Courses from './Components/Courses/Neet/NeetClass11Courses';
import NeetClass12Courses from './Components/Courses/Neet/NeetClass12Courses';
import NeetClass12DropperCourses from './Components/Courses/Neet/NeetClass12DropperCourses';
import Class6to10Courses from './Components/Courses/Class6to10Courses';
import Class6Courses from './Components/Courses/Class6to10/Class6Courses';
import Class7Courses from './Components/Courses/Class6to10/Class7Courses';
import Class8Courses from './Components/Courses/Class6to10/Class8Courses';
import Class9Courses from './Components/Courses/Class6to10/Class9Courses';
import Class10Courses from './Components/Courses/Class6to10/Class10Courses';
import OnlineCourses from './Components/Courses/ViewAllCourses/OnlineCourses';
import CuetCourses from './Components/Courses/CuetCourses';
import JeeMain2025Results from './Components/Results/JeeMain/JeeMain2025Results';
import Class6to10Results from './Components/Results/Class6to10/Class6to10Results';
import NeetResults2023 from './Components/Results/Neet/NeetResults2023';
import NeetResults2022 from './Components/Results/Neet/NeetResults2022';
import TitleUpdater from './Components/TitleUpdater';


function App() {
  return (
  <RecoilRoot>
    <BrowserRouter>
        <TitleUpdater/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='aosat-register' element={<Scholarship/>}/>

          <Route path='jee'>
            <Route index element={<JeeCourses/>}/>
            <Route path='class-11' element={<JeeClass11Courses/>}/>
            <Route path='class-12' element={<JeeClass12Courses/>}/>
            <Route path='12th-droppers' element={<JeeClass12DropperCourses/>}/>
            <Route path='test-series'>
              <Route index element={<JeeTestSeries/>} />
              <Route path=':className' element={<JeeTestIndex/>} />
            </Route>
            <Route path='results-2025' element={<JeeMain2025Results/>}/>
          </Route>

          <Route path='neet'>
            <Route index element={<NeetCourses/>}/>
            <Route path='class-11' element={<NeetClass11Courses/>}/>
            <Route path='class-12' element={<NeetClass12Courses/>}/>
            <Route path='12th-droppers' element={<NeetClass12DropperCourses/>}/>
            <Route path='test-series'>
              <Route index element={<NeetTestSeries/>} />
              <Route path=':className' element={<NeetTestIndex/>}/>
            </Route>

            <Route element={<NeetResults/>}>
              <Route path='results-2024' element={<NeetResults2024/>}/>
              <Route path='results-2023' element={<NeetResults2023/>}/>
              <Route path='results-2022' element={<NeetResults2022/>}/>
            </Route>

          </Route>

          <Route path='class-6-10'>
            <Route index element={<Class6to10Courses/>}/>
            <Route path='results' element={<Class6to10Results/>}/>
          </Route>

          <Route element={<JuniorClassesCourses/>}>
            <Route path='class-6' element={<Class6Courses/>}/>
            <Route path='class-7' element={<Class7Courses/>}/>
            <Route path='class-8' element={<Class8Courses/>}/>
            <Route path='class-9' element={<Class9Courses/>}/>
            <Route path='class-10' element={<Class10Courses/>}/>
          </Route>

          <Route element={<ViewAllCoursesOptions/>}>
            <Route path='online-courses' element={<OnlineCourses/>}/>
          </Route>

          <Route path='cuet'>
            <Route index element={<CuetCourses/>}/>
            <Route path='test-series' element={<CuetTestSeries/>}/>
          </Route>

          <Route path='jee-main'>
            <Route path='exam' element={<JeeMainExam/>}/>
            <Route path='previous-year-papers' element={<JeeMainPrevPapers/>}/>
            <Route path='sample-paers' element={<JeeMainSamplePapers/>}/>
            <Route path='results' element={<JeeMainResults/>}/>
            <Route path='analysis' element={<JeeMainAnalysis/>}/>
            <Route path='syllabus' element={<JeeMainSyllabus/>}/>
            <Route path='exam-date' element={<JeeMainExamDate/>}/>
            <Route path='test-series' element={<JeeMainTestSeries/>}/>
          </Route>

          <Route path='jee-advanced'>
            <Route path='exam' element={<JeeAdvExam/>}/>
            <Route path='previous-year-papers' element={<JeeAdvPrevPapers/>}/>
            <Route path='sample-paers' element={<JeeAdvSamplePapers/>}/>
            <Route path='mock-tests' element={<JeeAdvMockTests/>}/>
            <Route path='results' element={<JeeAdvResults/>}/>
            <Route path='analysis' element={<JeeAdvAnalysis/>}/>
            <Route path='syllabus' element={<JeeAdvSyllabus/>}/>
            <Route path='exam-date' element={<JeeAdvExamDate/>}/>
          </Route>

          <Route path='neet'>
            <Route path='exam' element={<NeetExam/>}/>
            <Route path='previous-year-papers' element={<NeetPrevPapers/>}/>
            <Route path='sample-paers' element={<NeetSamplePapers/>}/>
            <Route path='mock-tests' element={<NeetMockTests/>}/>
            <Route path='results' element={<NeetResults2024/>}/>
            <Route path='analysis' element={<NeetAnalysis/>}/>
            <Route path='syllabus' element={<NeetSyllabus/>}/>
            <Route path='exam-date' element={<NeetExamDate/>}/>
          </Route>

          <Route path='ncert-solutions'>
            <Route index element={<NcertSolution/>}/>
            <Route path='class-6' element={<NcertClass6Solution/>}/>
            <Route path='class-7' element={<NcertClass7Solution/>}/>
            <Route path='class-8' element={<NcertClass8Solution/>}/>
            <Route path='class-9' element={<NcertClass9Solution/>}/>
            <Route path='class-10' element={<NcertClass10Solution/>}/>
            <Route path='class-11' element={<NcertClass11Solution/>}/>
            <Route path='class-12' element={<NcertClass12Solution/>}/>
          </Route>

          <Route path='cbse'>
            <Route path='exam' element={<CbseExam/>}/>
            <Route path='notes' element={<CbseNotes/>}/>
            <Route path='sample-papers' element={<CbseSamplePapers/>}/>
            <Route path='question-papers' element={<CbseQuestionPapers/>}/>
          </Route>

          <Route path='olympiad'>
            <Route path='exam' element={<OlympiadExam/>}/>
            <Route path='imo' element={<IMO/>}/>
            <Route path='nso' element={<NSO/>}/>
            <Route path='nmtc' element={<NMTC/>}/>
          </Route>

          <Route element={<About/>}>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='blogs' element={<Blogs/>}/>
            <Route path='news' element={<News/>}/>
          </Route>

          <Route element={<ContactUs/>}>
            <Route path='call-back' element={<CallBack/>}/>
            <Route path='home-demo' element={<HomeDemo/>}/>
          </Route>
          
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  )
}

export default App
