import React, { useState } from "react";

type StudentType = {
    name?: string,
    position? : string,
    salary? : string,
}

const ArrayState: React.FC = () => {
    const [studentData, setStudentData] = useState<StudentType>({});
    const [studentList, setStudentList] = useState<StudentType[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setStudentData({
            ...studentData,
            [name]: value,
        });
    }

    const handleAdd = () => {
        setStudentList([
            ...studentList,
            {
                name: studentData.name,
                position : studentData.position,
                salary: studentData.salary,
            }
        ]);
    }

    return (
        <>
            <div>
                <label>Name:</label>
                <input onInput={handleChange} type="text" name="name" id="" />
            </div>

            <div>
                <label>Position:</label>
                <input onInput={handleChange} type="text" name="position" id="" />
            </div>

            <div>
                <label htmlFor="id">Salary:</label>
                <input onInput={handleChange} type="number" name="salary" id="" />
            </div>
            <br />
            <button onClick={handleAdd}>Add Student</button>

            <div>
                <h3>Result:</h3>
                {studentList.map((item, index) => (
                    <React.Fragment key={index}>
                    <hr />
                        <p>ID: {index+1} | Name: {item.name} | Position : {item.position} | Salary : {item.salary}</p>
                    </React.Fragment>
                   
                ))}
                <hr />
            </div>
        </>
    );
}

export default ArrayState;