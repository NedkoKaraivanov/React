import { data } from "../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItemHandler = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  }
  const removeAllItemsHandler = () => {
    setPeople([]);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" type="button" style={{marginBottom:'1rem'}} onClick={() => removeItemHandler(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={removeAllItemsHandler}>
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;
