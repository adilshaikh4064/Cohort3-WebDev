import { cloneElement, ReactElement } from "react";
import { IconInterface } from "../icons/ShareIcon";

interface ButtonInterface{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    title: string;
    startIcon?: ReactElement<IconInterface>;
    endIcon?: ReactElement<IconInterface>;
    onClick?: ()=>void;
}

const variantStyles={
    'primary': 'bg-fill-primary text-white',
    'secondary': 'bg-fill-secondary text-primary-text'
}
const sizeStyles={
    'sm': 'px-2 py-1 text-[0.75rem] font-medium rounded-2xl bg-fill-tertiary',
    'md': '',
    'lg': 'px-5 py-2 text-lg font-light rounded-xl'
}


const Button=(props:ButtonInterface)=>{
    return (
    <>
    <button
        className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} flex justify-center items-center gap-2 cursor-pointer`}
    >
        {props.startIcon && cloneElement(props.startIcon, {size: props.size})}
        {props.title}
        {props.endIcon && cloneElement(props.endIcon,{size: props.size})}
    </button>
    </>
    );
}

export default Button;