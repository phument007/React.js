import React from "react"
interface props1{
    title : string;
    children: React.ReactNode;
}
const Artical:React.FC<props1> = (props) => {
    const {title,children} = props;
    return <div>
        <h1>{ title }</h1>
        <div>
            {children}
        </div>
    </div>
}

export default Artical;