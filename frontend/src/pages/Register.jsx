import { useState } from "react";
import API from "../api/api";

function Register() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      await API.post("/auth/register",{email,password});
      alert("User registered successfully");
    }catch(err){
      alert("Registration failed");
    }
  }

  return(
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default Register;