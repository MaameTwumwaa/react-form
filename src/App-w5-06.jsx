import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameChange}
        value={name}
        placeholder="Enter your name"
        type="text"
      />
      <input
        onChange={handleEmailChange}
        value={email}
        placeholder="Enter your email"
        type="email"
      />

      <input
        onChange={handlePasswordChange}
        value={password}
        placeholder="Enter your password"
        type="text"
      />
      <input type="submit" />
    </form>
  );
};
export default App;
