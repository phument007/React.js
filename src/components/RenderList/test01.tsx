import React from "react";


const people:string[] = [
    "Kok Dara",
    "Kok Tota",
    "Kok Reaksa"
]

const PeopleList = people.map(function(items){
    return <li>{items}</li>
});
const People: React.FC = () => {

    return (
        <>
        <ul>
            {
                // people.map((item,index) => {
                //     return <li key={index}>{item}</li>
                // })
                PeopleList
            }
        </ul>
        </>
    );
}

export default People;