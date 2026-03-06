import { useEffect, useState } from "react";
import API from "../api/api";

function AdminDashboard(){

  const [users,setUsers] = useState([]);
  const [tasks,setTasks] = useState([]);

  const fetchUsers = async()=>{
    const res = await API.get("/admin/users");
    setUsers(res.data);
  }

  const viewTasks = async(userId)=>{
    const res = await API.get(`/admin/users/${userId}/tasks`);
    setTasks(res.data);
  }

  const deleteUser = async(id)=>{
    await API.delete(`/admin/users/${id}`);
    fetchUsers();
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href="/";
  }

  return(

    <div>

      <h2>Admin Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <h3>All Users</h3>

      {users.map((user)=>(
        <div key={user.id} style={{border:"1px solid gray",padding:"10px",margin:"10px"}}>

          {user.email} - {user.role}

          <div>

            <button onClick={()=>viewTasks(user.id)}>
              View Tasks
            </button>

            <button
              onClick={()=>deleteUser(user.id)}
              style={{marginLeft:"10px"}}
            >
              Delete User
            </button>

          </div>

        </div>
      ))}

      <h3>User Tasks</h3>

      {tasks.length === 0 ? (
        <p style={{color:"red"}}>No Tasks Available</p>
        ) : (
        tasks.map((task)=>(
            <div key={task.id}>
            <b>{task.title}</b>
            <p>{task.description}</p>
            </div>
        ))
        )}

    </div>

  )
}

export default AdminDashboard