import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard(){

    useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
  } else {
    fetchTasks();
  }
   }, []);
  const [tasks,setTasks] = useState([]);

  const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
    };

  const fetchTasks = async()=>{
    const res = await API.get("/tasks/");
    setTasks(res.data);
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return(

    <div>

      <h2>Dashboard</h2>
        <button onClick={logout}>Logout</button>

      {tasks.map((task)=>(
        <div key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>
      ))}

    </div>

  )
}

export default Dashboard;