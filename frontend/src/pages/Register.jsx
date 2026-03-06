import { useState } from "react";
import API from "../api/api";


function Register(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role,setRole] = useState("user")


const handleSubmit = async (e) => {

  e.preventDefault();
  const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
    }

  try {

    await API.post("/auth/register", {
      email,
      password,
      role
    });

    alert("Registration successful");
    navigate("/login");

  } catch (error) {

    if (error.response) {

      const message = error.response.data.detail;

      alert(message);

    } else {
      alert("Something went wrong");
    }
  }
};

  return(

    <div>

      <h2>Register</h2>

      <form className="form-container" onSubmit={handleSubmit}>

        <input
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

        <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        >
          <option value="user">Register as User</option>
          <option value="admin">Register as Admin</option>
        </select>

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  )
}

export default Register