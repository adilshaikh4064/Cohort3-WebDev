import { Outlet, Route } from "react-router-dom";
import JeeMain2025Results from "../components/results/jeeMain2025";
import Neet2024Results from "../components/results/neet/neet2024Results";
import Neet2023Results from "../components/results/neet/neet2023Results";
import Neet2022Results from "../components/results/neet/neet2022Results";
import Class6to10Results from "../components/results/class6to10";

const NeetResults=()=>(
    <Outlet/>
)

const ResultRoutes=()=>(
    <>
        <Route path="jee-main-2025" element={<JeeMain2025Results/>} />
        <Route element={<NeetResults/>}>
            <Route path="neet-result-2024" element={<Neet2024Results/>} />
            <Route path="neet-result-2023" element={<Neet2023Results/>} />
            <Route path="neet-result-2022" element={<Neet2022Results/>} />
        </Route>
        <Route path="class6to10-result" element={<Class6to10Results/>} />
    </>
)

export default ResultRoutes;