import React, { useState } from "react";

type StudentType = {
  id?: number;
  name?: string;
  position?: string;
  salary?: string;
};

const ArrayState: React.FC = () => {
  const [studentData, setStudentData] = useState<StudentType>({});
  const [studentList, setStudentList] = useState<StudentType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleAdd = () => {
    setStudentList([
      {
        id: studentData.id,
        name: studentData.name,
        position: studentData.position,
        salary: studentData.salary,
      },
      ...studentList,
    ]);

    setStudentData({});
   
  };

 const handleUpdate = (id: any) => {
    const selectedStudent = studentList.find((item) => item.id === id);
    if (selectedStudent) {
        setStudentData({
            id: selectedStudent.id,
            name: selectedStudent.name || '',
            position: selectedStudent.position || '',
            salary: selectedStudent.salary || '',
        });
    }
};

  return (
    <>
      <div>
        <label>ID:</label>
        <input onInput={handleChange} type="number" name="id" id="" />
      </div>

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
        <input onInput={handleChange} type="text" name="salary" id="" />
      </div>
      <br />
      <button onClick={handleAdd}>Add Student</button>

      <div>
        <h3>Result:</h3>
        {studentList.map((item, index) => (
          <React.Fragment key={index}>
            <hr />
            <p>
              ID: {item.id} | Name: {item.name} | Position : {item.position} | Salary : {item.salary}
            </p>
            <button
              onClick={() => {
                console.log("id : ", item.id);
                setStudentList(studentList.filter((it) => it.id !== item.id));
              }}
            >
              Delete
            </button>
            <button onClick={() => handleUpdate(item.id)}>Edit</button>
          </React.Fragment>
        ))}
        <hr />
      </div>
    </>
  );
}

export default ArrayState;