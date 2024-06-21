import React, { ButtonHTMLAttributes } from "react";
interface test02 extends ButtonHTMLAttributes<HTMLButtonElement>{
  
}

const Button: React.FC<test02> = (props) => {
    const {...rest} = props;
   return <button {...rest}>Click me</button>
}

export default Button;