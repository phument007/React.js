import React, { useState } from "react"
const Form:React.FC = () => {
    const [isSend,setSend] = useState(false);
    const [text,setText] = useState("Hi!");
    if(isSend){
        
        return <p>{text}</p>
    }
    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    setText("Hello world")
                    setSend(true);
                }
            }>
                <textarea placeholder="">{text}</textarea><br />
                <button>send</button>
            </form>
        </div>
    );

}

export default Form;