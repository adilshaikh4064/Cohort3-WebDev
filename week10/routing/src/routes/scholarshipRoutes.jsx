import { Route } from "react-router-dom";
import JeeScholarship from "../components/scholarship/jeeScholarship";
import NeetScholarship from "../components/scholarship/neetScholarship";
import PreScholarship from "../components/scholarship/preScholarship";

const ScholarshipRoutes=()=>(
    <>
        <Route path="jee-scholarship" element={<JeeScholarship/>}/>
        <Route path="neet-scholarship" element={<NeetScholarship/>}/>
        <Route path="pre-scholarship" element={<PreScholarship/>}/>
    </>
)

export default ScholarshipRoutes;