import { useRecoilState, useRecoilValue } from "recoil";
import { notificationsAtom, totalNotificationsSelector } from "./atoms";

const AdvancedRecoil=function(){
    const {networks,jobs,notifications,messages}={a:0,b:0,c:0,d:0}   //useRecoilValue(notificationsAtom)
    const totalNotifications=useRecoilValue(totalNotificationsSelector)

    return(
    <>
        <button> Home </button>

        <button> My Network ({networks}) </button>
        <button> Jobs ({jobs}) </button>
        <button> Messaging ({messages}) </button>
        <button> Notifications ({notifications}) </button>

        <button> Me ({totalNotifications}) </button>
    </>
    );
}

export default AdvancedRecoil;