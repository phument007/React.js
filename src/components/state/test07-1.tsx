import React, { Attributes, ChangeEvent, useState } from "react";

type contactType = {
    phone : string,
    address: string,
}

type objType = {
    id : number,
    name : string,
    contact? : contactType
}

const ObjState = () => {
    const [student,setStudent] = useState<objType>({
        id : 0,
        name : '',
        contact : {
            phone : '',
            address: '',
        }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStudent({
            ...student, 
            id : parseInt(e.target.value),
        });
    }

    const handleNamChange = (e: ChangeEvent<HTMLInputElement>):void => {
           setStudent({
              ...student, 
               name : e.target.value,
           });
    }

    return (
        <>
          <div>
            <label htmlFor="id">ID : </label>
            <input onChange={handleChange} type="number" name="" id="" />
          </div>
          <br />

          <div>
            <label htmlFor="name">Name : </label>
            <input onInput={handleNamChange} type="text" name="" id="" />
          </div>
          <br />
          <div>
            <label htmlFor="name">Phone : </label>
            <input type="text" name="" id="" />
          </div>

          <div>
              <h3>Result :</h3>
              <p>ID   : {student.id}</p>
              <p>Name : {student.name}</p>
              <p>Address : </p>
              <p>
                 Contact : 
                 <p>Phone   : {student.contact?.phone !== undefined ? student.contact.phone : 'n/a'}</p>
                 <p>Address : {student.contact?.address !== undefined ? student.contact.address : 'n/a'}</p>
              </p>
          </div>
        </>
    );
}

export default ObjState;