import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role,setRole] = useState("user")

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      const res = await API.post("/auth/login",{email,password})

      localStorage.setItem("token",res.data.access_token)

      const payload = JSON.parse(atob(res.data.access_token.split('.')[1]))

      if(payload.role === "admin"){
        navigate("/admin")
      }else{
        navigate("/dashboard")
      }

    }catch(err){
      alert("Invalid credentials")
    }
  }

  return(

    <div className="app-container">
  <div className="content-box">

      <h2>Login</h2>

      <form className="form-container" onSubmit={handleSubmit}>

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

        <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        >
          <option value="user">User Login</option>
          <option value="admin">Admin Login</option>
        </select>

        <button type="submit">
          Login
        </button>

      </form>

    </div>
    </div>
  )
}

export default Login