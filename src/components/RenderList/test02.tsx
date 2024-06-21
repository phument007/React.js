import React from "react";
type StudentModel = {
    id: number,
    name : string,
    age : number,
}
const StudentList: StudentModel[] = [
    {
        id: 1,
        name: 'John',
        age: 20,
    },
    {
        id: 2,
        name: 'Jane',
        age: 21,
    },
    {
        id: 3,
        name: 'Mary',
        age: 22,
    },
    {
        id: 4,
        name: 'Tom',
        age: 23,
    },
    {
        id: 5,
        name: 'Jerry',
        age: 24,
    },
    {
        id: 6,
        name: 'Lily',
        age: 25,
    },
    {
        id: 7,
        name: 'Kate',
        age: 26,
    },
    {
        id: 8,
        name: 'Lisa',
        age: 27,
    },
]

const Students:React.FC= () => {
      const checkStuden = StudentList.filter((items)=> items.age >=25 );
      return (
         <>
            {
            
                checkStuden.map(function(items){
                    return(
                        <div key={items.id}>
                            <p> ID   : {items.id}</p>
                            <p> NAME : {items.name}</p>
                            <p> AGE  : {items.age}</p>
                        </div>
                    );
                })
            }
         </>
      );
}

export default Students;