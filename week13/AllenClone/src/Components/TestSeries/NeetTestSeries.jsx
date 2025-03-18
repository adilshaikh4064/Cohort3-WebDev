import { Route, useParams, useSearchParams } from "react-router-dom";
import NeetClass11TestSeries from "./Neet/NeetClass11TestSeries";
import NeetClass12DroppersTestSeries from "./Neet/NeetClass12DroppersTestSeries";
import NeetClass12TestSeries from "./Neet/NeetClass12TestSeries";


const NeetTestIndex=()=>{
    const {className}=useParams();
    const [searchParams]=useSearchParams();

    const mode=searchParams.get('mode');
    const session=searchParams.get('session');

    return (
    <>
        {(className==='class-11' && mode==='online' && session==='2025') && (<NeetClass11TestSeries/>)}

        {(className==='class-12' && mode==='online' && session==='2025') && (<NeetClass12TestSeries/>)}

        {(className==='12th-dropper' && mode==='online' && session==='2025') && (<NeetClass12DroppersTestSeries/>)}
    </>
    );
}

const NeetTestSeries=()=>{
    
    return (
    <>
        NeetTestSeries
    </>
    );
}

export default NeetTestSeries;
export {
    NeetTestIndex
}