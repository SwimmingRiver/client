import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [userName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/signin", {
        userName,
        password,
      })
      .then(() => {
        console.log("good job");
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <div>LoginForm</div>
      <input
        placeholder="userName"
        value={userName}
        onChange={(e) => setUseName(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>sign up</button>
    </form>
  );
};

export default LoginForm;
