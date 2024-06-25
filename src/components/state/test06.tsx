import React, { useState } from "react"

const ChangeText:React.FC = () => {
    const [change,setChange] = useState(true);
    const handleClick = () => {
        setChange(!change);
    }
    return (
        <>
          <button onClick={handleClick}>change to  stop</button>
          <h1 style={{ color : (change ? 'green' : 'red') }}>
              { change ? 'walk' : 'stop' }
          </h1>
        </>
    );
}

export default ChangeText;