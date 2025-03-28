import { atom } from "recoil";

export type message={
    sender:boolean,
    text:string
}

const inputValueOneAtom=atom({
    key:'inputValueOneAtom',
    default:''
})
const inputValueTwoAtom=atom({
    key:'inputValueTwoAtom',
    default:''
})
const sendMessageAtom=atom({
    key:'sendMessageAtom',
    default:'akjfhdsj jdhfkjsadhf asdhjfaskjdfhsdjk hjdghasdoiufghasiudfhksjdhfksjdb kajsdbfaskjdhfklsj'
})
const recieveMessageAtom=atom({
    key:'recieveMessageAtom',
    default:'sakdjfhaskj kjashfaskj jshdfkj hksjfdhsakjdhfksjh kjdfhaskjfh'
})

const messagesAtom=atom<message[]>({
    key:'addMessageAtom',
    default:[]
})

const messangerOneAtom=atom<message[]>({
    key:'messangerOneAtom',
    default:[]
})
const messangerTwoAtom=atom<message[]>({
    key:'messangerTwoAtom',
    default:[]
})


export{
    inputValueOneAtom,
    inputValueTwoAtom,
    sendMessageAtom,
    recieveMessageAtom,
    messagesAtom,
    messangerOneAtom,
    messangerTwoAtom
}