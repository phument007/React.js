import React, { useState } from "react";
const SetNumber:React.FC = () => {
    const [number,setNumber] = useState(0);

    const handleSum = () => {
        setNumber(number+3);
    }
    return (
        <>
        <p>{number}</p>
        <button onClick={handleSum}>+</button>
        </>
    );
}

export default  SetNumber;