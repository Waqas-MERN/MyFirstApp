import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add code here to handle sign in process
  };

  return (
    <div className="container-center">
    <form onSubmit={handleSubmit}>
      <h2>SignIn</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <div className='m-3'> <button type="submit">Sign In</button> 
      <button type="submit">Sign Up</button> </div>
    </form>
    </div>
  );
};

export default SignIn;
