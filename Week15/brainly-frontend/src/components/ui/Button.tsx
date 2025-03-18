
interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: unknown;
    endIcon?: unknown;
    onClick: ()=>void;
}

const Button=(props:ButtonProps)=>{

}

export default Button;