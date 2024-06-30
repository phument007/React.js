import React, { useState } from "react";
type StudentType = {
    id?: number,
    name?:string,
}

const ArrayState:React.FC = () => {
    const [studentData,setStudentData] = useState<StudentType[]>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value.length > 0 ? e.target.value :
        'n/a';

        if(studentData){
            setStudentData({
                ...studentData,
                [name]: value,
            });
        }

    }
    return (
        <>
          <div>
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" id="student_id" />
          </div>
          <div>
            <label>Name:</label>
            <input type="text" name="" id="student_id" />
          </div>
          <div>Result : </div>
        </>
    );
}

export default ArrayState;