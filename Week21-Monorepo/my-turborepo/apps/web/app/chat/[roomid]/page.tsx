import { TextInput } from "@repo/ui/text-input";

export default function ChatRoom(){
    return (
    <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column'
    }}>
        <div></div>
        <div>
            <TextInput placeHolder="type message"/>
        </div>
    </div>
    )
}