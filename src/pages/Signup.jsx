import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Signup = () => {
  const {  handleSubmit, name, setName } = useGlobalContext();

 
  console.log(name);

  return (
    <form className="signup-box" onSubmit={handleSubmit} action="">
      <input
        className="signup-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <Link className="submit-btn">Submit</Link>
    </form>
  );
};

export default Signup;
