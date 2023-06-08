import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'read books', 
  });
  const displayPerson = () => {
    // setPerson({name:'John', age:30, hobby:'Coding'});
    setPerson({...person, name:'Susan'})
  }
  return (
    <>
      <h3>{person.name}</h3> 
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4> 
      <button className='btn' onClick={displayPerson}>
        Show john
      </button>
    </>
  );
};

export default UseStateObject;
