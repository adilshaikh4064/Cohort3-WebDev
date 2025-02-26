import { Route } from "react-router-dom";
import JeeMainPrevPapers from "../components/studyMaterials/jeemain/jeeMainPrevPapers";
import JeeMainSamplePapers from "../components/studyMaterials/jeemain/jeeMainSamplePapers";
import JeeMainResults from "../components/studyMaterials/jeemain/jeeMainResults";
import JeeMainAnalysis from "../components/studyMaterials/jeemain/jeeMainAnalysis";
import JeeMainSyllabus from "../components/studyMaterials/jeemain/jeeMainSyllabus";
import JeeMainExamDate from "../components/studyMaterials/jeemain/jeeMainExamDate";
import JeeAdvPrevPapers from "../components/studyMaterials/jeeadv/jeeAdvPrevPapers";
import JeeAdvSamplePapers from "../components/studyMaterials/jeeadv/jeeAdvSamplePapers";
import JeeAdvResults from "../components/studyMaterials/jeeadv/jeeAdvResults";
import JeeAdvAnalysis from "../components/studyMaterials/jeeadv/jeeAdvAnalysis";
import JeeAdvSyllabus from "../components/studyMaterials/jeeadv/jeeAdvSyllabus";
import JeeAdvExamDate from "../components/studyMaterials/jeeadv/jeeAdvExamDate";
import JeeAdvMockTest from "../components/studyMaterials/jeeadv/jeeAdvMockTest";
import Class6Solution from "../components/studyMaterials/ncertSolution/class6Solution";
import Class7Solution from "../components/studyMaterials/ncertSolution/class7Solution";
import Class8Solution from "../components/studyMaterials/ncertSolution/class8Solution";
import Class9Solution from "../components/studyMaterials/ncertSolution/class9Solution";
import Class10Solution from "../components/studyMaterials/ncertSolution/class10Solution";
import Class11Solution from "../components/studyMaterials/ncertSolution/class11Solution";
import Class12Solution from "../components/studyMaterials/ncertSolution/class12Solution";
import CbseNotes from "../components/studyMaterials/cbse/notes";
import CbseQuePapers from "../components/studyMaterials/cbse/questionPapers";
import CbseSamplePapers from "../components/studyMaterials/cbse/samplePapers";
import OlympiadImo from "../components/studyMaterials/olympiad/imo";
import OlympiadNmtc from "../components/studyMaterials/olympiad/nmtc";
import OlympiadNso from "../components/studyMaterials/olympiad/nso";
import NeetPrevPapers from "../components/studyMaterials/neet/neetPrevPapers";
import NeetSamplePapers from "../components/studyMaterials/neet/neetSamplePapers";
import NeetResults from "../components/studyMaterials/neet/neetResults";
import NeetAnalysis from "../components/studyMaterials/neet/neetAnalysis";
import NeetSyllabus from "../components/studyMaterials/neet/neetSyllabus";
import NeetExamDate from "../components/studyMaterials/neet/neetExamDate";
import NeetMockTest from "../components/studyMaterials/neet/neetMockTest";
import NeetIndex from "../components/studyMaterials/neet/neetIndex";
import JeeAdvIndex from "../components/studyMaterials/jeeadv/jeeAdvIndex";
import JeeMainIndex from "../components/studyMaterials/jeemain/jeeMainIndex";
import NcertSolutionIndex from "../components/studyMaterials/ncertSolution/ncertSolutionIndex";
import CbseIndex from "../components/studyMaterials/cbse/cbseIndex";
import OlympiadIndex from "../components/studyMaterials/olympiad/olympiadIndex";

const StudyMaterialRoutes=()=>(
    <>
        <Route path="neet-exam">
            <Route index element={<NeetIndex/>}/>
            <Route path="prev-papers" element={<NeetPrevPapers/>} />
            <Route path="sample-papers" element={<NeetSamplePapers/>} />
            <Route path="results" element={<NeetResults/>} />
            <Route path="analysis" element={<NeetAnalysis/>} />
            <Route path="syllabus" element={<NeetSyllabus/>} />
            <Route path="exam-date" element={<NeetExamDate/>} />
            <Route path="mock-tests" element={<NeetMockTest/>} />
        </Route>

        <Route path="jee-advance-exam">
            <Route index element={<JeeAdvIndex/>}/>
            <Route path="prev-papers" element={<JeeAdvPrevPapers/>} />
            <Route path="sample-papers" element={<JeeAdvSamplePapers/>} />
            <Route path="results" element={<JeeAdvResults/>} />
            <Route path="analysis" element={<JeeAdvAnalysis/>} />
            <Route path="syllabus" element={<JeeAdvSyllabus/>} />
            <Route path="exam-date" element={<JeeAdvExamDate/>} />
            <Route path="mock-tests" element={<JeeAdvMockTest/>} />
        </Route>

        <Route path="jee-main-exam">
            <Route index element={<JeeMainIndex/>}/>
            <Route path="prev-papers" element={<JeeMainPrevPapers/>} />
            <Route path="sample-papers" element={<JeeMainSamplePapers/>} />
            <Route path="results" element={<JeeMainResults/>} />
            <Route path="analysis" element={<JeeMainAnalysis/>} />
            <Route path="syllabus" element={<JeeMainSyllabus/>} />
            <Route path="exam-date" element={<JeeMainExamDate/>} />
        </Route>

        <Route path="ncert-solution-exam">
            <Route index element={<NcertSolutionIndex/>}/>
            <Route path="class-6" element={<Class6Solution/>} />
            <Route path="class-7" element={<Class7Solution/>} />
            <Route path="class-8" element={<Class8Solution/>} />
            <Route path="class-9" element={<Class9Solution/>} />
            <Route path="class-10" element={<Class10Solution/>} />
            <Route path="class-11" element={<Class11Solution/>} />
            <Route path="class-12" element={<Class12Solution/>} />
        </Route>

        <Route path="cbse-exam">
            <Route index element={<CbseIndex/>}/>
            <Route path="notes" element={<CbseNotes/>}/>
            <Route path="question-papers" element={<CbseQuePapers/>}/>
            <Route path="sample-papers" element={<CbseSamplePapers/>}/>
        </Route>

        <Route path="olympiad-exam">
            <Route index element={<OlympiadIndex/>}/>
            <Route path="imo" element={<OlympiadImo/>}/>
            <Route path="nmtc" element={<OlympiadNmtc/>}/>
            <Route path="nso" element={<OlympiadNso/>}/>
        </Route>
    </>
)


export default StudyMaterialRoutes;