import { useParams, useSearchParams } from "react-router-dom";
import JeeMainClass11TestSeries from "./JeeMain/JeeMainClass11TestSeries";
import JeeMainClass12DroppersTestSeries from "./JeeMain/JeeMainClass12DroppersTestSeries";
import JeeMainClass12TestSeries from "./JeeMain/JeeMainClass12TestSeries";
import JeeMainAdvClass11TestSeries from "./JeeMainAdv/JeeMainAdvClass11TestSeries";
import JeeMainAdvClass12DropperTestSeries from "./JeeMainAdv/JeeMainAdvClass12DroppersTestSeries";
import JeeMainAdvClass12TestSeries from "./JeeMainAdv/JeeMainAdvTestSeriesClass12TestSeries";

const JeeTestIndex=()=>{
    const {className}=useParams();
    const [searchParams]=useSearchParams();

    const mode=searchParams.get("mode");
    const session=searchParams.get('session');
    let name=null;
    if(searchParams.has('name')) name=searchParams.get('name');

    return (
    <>
    {(className==='class-11' && mode==='online' && session==='2025' && name===null) && (<JeeMainAdvClass11TestSeries/>)}
    {(className==='class-12' && mode==='online' && session==='2025' && name===null) && (<JeeMainAdvClass12TestSeries/>)}
    {(className==='12th-dropper' && mode==='online' && session==='2025' && name===null) && (<JeeMainAdvClass12DropperTestSeries/>)}
    {(className==='class-11' && mode==='online' && session==='2025' && name==='jeemain') && (<JeeMainClass11TestSeries/>)}
    {(className==='class-12' && mode==='online' && session==='2025' && name==='jeemain') && (<JeeMainClass12TestSeries/>)}
    {(className==='12th-dropper' && mode==='online' && session==='2025' && name==='jeemain') && (<JeeMainClass12DroppersTestSeries/>)}
    </>
    );
}


const JeeTestSeries=()=>(
    <>
        <JeeMainClass11TestSeries/>
        <JeeMainClass12TestSeries/>
        <JeeMainClass12DroppersTestSeries/>
        <JeeMainAdvClass11TestSeries/>
        <JeeMainAdvClass12TestSeries/>
        <JeeMainAdvClass12DropperTestSeries/>
        JeeTestSeries
    </>
)

export default JeeTestSeries;

export{
    JeeTestIndex,
}