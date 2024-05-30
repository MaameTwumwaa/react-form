import React, { useState } from "react";
import "./App.css";

//there 2 things we are getting from the useState; first what we can use to read
// the state and second is what we can use to update the state
//the default value for user state is (0)

//this is how to create the state
const Counter = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Kofi");
  const [age, setAge] = useState(23);

  //this is how to read the state
  const handleClick = () => {
    setNumber(number + 1);
    setAge(age + 5);
  };
  return (
    <div className="App">
      <h1>{number}</h1>
      <h1>{age}</h1>

      <button onClick={handleClick}>Add one</button>
    </div>
  );
};

export default Counter;
