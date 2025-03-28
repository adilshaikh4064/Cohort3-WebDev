import { ReactElement } from "react";

interface SideBarButtonInterface{
    name:string,
    startIcan: ReactElement
}

const SideBarButtons=(props:SideBarButtonInterface)=>{

    return (
    <div className="flex items-center gap-2 text-secondary-text font-normal">
        {props.startIcan}
        <p> {props.name} </p>
    </div>
    );
}

export default SideBarButtons;
