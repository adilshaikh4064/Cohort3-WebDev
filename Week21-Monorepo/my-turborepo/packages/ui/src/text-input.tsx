type PropType={
    placeHolder:string;
}

export function TextInput({
    placeHolder
}:PropType){
    return (
    <div 
        style={{
        height:'2rem',
        border:'1px solid gray',
        borderRadius:'1rem',
        width:'300px',
        display:'flex',
        justifyContent:"center",
        justifyItems:'center',
        paddingLeft:'1rem'
    }}>
        <input 
            style={{
                all:'unset',
                width:'100%',
            }}
            type="text" placeholder={placeHolder}
        />
    </div>
    )
}