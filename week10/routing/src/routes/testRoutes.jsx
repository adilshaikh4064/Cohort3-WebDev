import { Route, useSearchParams } from "react-router-dom";
import NeetTest from "../components/testSeries/neet/neetTest";
import NeetTest11 from "../components/testSeries/neet/neetTestClass11";
import JeeMainTest11 from "../components/testSeries/jeeMain/jeeMainClass11";
import JeeMainTest from "../components/testSeries/jeeMain/jeeMain";
import JeeMainAdvTest11 from "../components/testSeries/jeeMainAdv/jeeMainAdvClass11";
import JeeMainAdvTest from "../components/testSeries/jeeMainAdv/jeeMainAdv";
import CuetTest from "../components/testSeries/cuet";

const NeetTestWrapper=()=>{
    const [searchParams]=useSearchParams();
    const mode=searchParams.get("mode")
    const session=searchParams.get("session")

    if(mode==="class11" && session==="2025"){
        return <NeetTest11/>;
    }

    return <NeetTest/>;
}

const JeeMainTestWrapper=()=>{
    const [searchParams]=useSearchParams();
    const mode=searchParams.get("mode");
    const session=searchParams.get("session");

    if(mode==="class11" && session==="2025"){
        return <JeeMainTest11/>;
    }

    return <JeeMainTest/>;
}

const JeeMainAdvTestWrapper=()=>{
    const [searchParams]=useSearchParams();
    const mode=searchParams.get("mode");
    const session=searchParams.get("session");

    if(mode==='class11' && session==='2025'){
        return <JeeMainAdvTest11/>;
    }

    return <JeeMainAdvTest/>;
}

const TestRoutes=()=>(
    <>
        <Route path="neet/test-series" element={<NeetTestWrapper/>}/>
        <Route path="jee-main/test-serise" element={<JeeMainTestWrapper/>}/>
        <Route path="jee/test-series" element={<JeeMainAdvTestWrapper/>}/>
        <Route path="cuet/test-series" element={<CuetTest/>}/>
    </>
)

export default TestRoutes;