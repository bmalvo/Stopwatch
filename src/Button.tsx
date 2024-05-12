import { MouseEventHandler } from "react";

type ButtonProps = {
    name: string;
    method: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ name, method }: ButtonProps) => {


    return <button onClick={method}>{ name }</button>
};
