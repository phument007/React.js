import React, { useState } from "react";

type StudentType = {
    id?: number,
    name? : string,
}

const ObjectState:React.FC = () => {
    const [student,setStudent] = useState<StudentType>();

   function handleInInput(e:any){
    setStudent({
        ...student,
        id : e.target.value
    })
   }

   const handleNameInput = (e:any) => {
    setStudent({
         ...student,
        name: e.target.value,
    });
   }
    return (
        <>
         <div>
            <label htmlFor="">ID : </label>
            <input onInput={handleInInput} type="number" name="" id="" />
         </div>

          <div>
            <label htmlFor="">Name : </label>
            <input onInput={handleNameInput} type="text" name="" id="" />
         </div>

         <div>
            Result:
            <h3>ID   : {student !== undefined ? student.id :  ''} </h3>
            <h3>Name : {student !== undefined ? student.name :  ''}  </h3>
         </div>
          
        </>
    );
}

export default ObjectState;