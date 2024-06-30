import React, { Attributes, ChangeEvent, useState } from "react";

type contactType = {
    phone?: string,
    address?: string,
}

type objType = {
    id? : number,
    name? : string,
    contact?: contactType
}

const ObjStateSingleHandleAlert = () => {
    const [student,setStudent] = useState<objType>();


    const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
       let result:objType = {...student}
       const name = e.target.name;
       const value = e.target.value;

       if(name.startsWith('contact')){
           result = {
             ...result,
              contact : {
                 ...result.contact,
                  [name.split('.')[1]] : value,
              }
           }
       }else{
         result = {
            ...result,
            [name] : value,
         }
       } 

      setStudent(result);

    }
 
    return (
        <>
          <div>
            <label htmlFor="id">ID : </label>
            <input onInput={handleInput}  type="number" name="id" id="" />
          </div>
          <br />

          <div>
            <label htmlFor="name">Name     : </label>
            <input onInput={handleInput} type="text" name="name" id="" />
          </div>
          <br />

         <div>
            <label htmlFor="contact.phone">Phone    : </label>
            <input onInput={handleInput} type="text" name="contact.phone" id="" />
          </div>
          <br />

         <div>
            <label htmlFor="contact.address">Address : </label>
            <input onInput={handleInput} type="text" name="contact.address" id="" />
          </div>
          <br />
         
         
          <div>
              <h3>Result :</h3>
              <p>ID   : {student?.id}</p>
              <p>Name : {student?.name}</p>
              <p>Phone Number : {student?.contact?.phone} </p>
              <p>Address : {student?.contact?.address}</p>
          </div>
        </>
    );
}

export default ObjStateSingleHandleAlert;