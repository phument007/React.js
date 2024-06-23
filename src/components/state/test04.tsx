
import React, { useState } from 'react';
import sculptureList from './app.tsx';
const Gallery:React.FC = () => {
  const [index,setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index+1);
    if(index == sculptureList.length-1){
      setIndex(0);
    }
  }
  const handlePrev = () => {
    setIndex(index-1);
    if(index == 0){
       setIndex(sculptureList.length - 1);
    }
  }
  let data = sculptureList[index];
  return (
    <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleClick}>Next</button>
        <p>{index + 1}/{sculptureList.length}</p>
        <h3>{data.artist}</h3>
        <p>{data.description}</p>
        <img style={{ width: '300px', height: '500px' }} src={data.url} alt={data.artist} />
    </div>
    
  );
}

export default Gallery;