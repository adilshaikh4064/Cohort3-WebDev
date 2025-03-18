import { atom, selector } from "recoil";
import axios from 'axios';

const notificationsAtom=atom({
    key:'notificationAtom',
    default:selector({
        key:'notificationAtomSelector',
        get:async function(){
            const response=await axios.get('https://sum-server.100xdevs.com/notifications');
            console.log(response.data);
            return response.data
        }
    })
})
const totalNotificationsSelector=selector({
    key:'totalNotificationsSelector',
    get:function({get}){
        const {network,jobs,notifications,messaging}=get(notificationsAtom);
        return network+jobs+notifications+messaging;
    }
})

export{
    notificationsAtom,
    totalNotificationsSelector
}