import React, { useState }  from "react";

const StateDemo: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const handleCounter = () => {
        setCount(count+1)
    }

    const handleDeCounter = () => {
        if(count == 0){
            return;
        }else{
            setCount(count-1)
        }
    }

    return (
        <div>
            <p>{ count }</p>
            <button onClick={handleCounter}>+</button>
            <button onClick={handleDeCounter}>-</button>
        </div>
    );
}

export default StateDemo;