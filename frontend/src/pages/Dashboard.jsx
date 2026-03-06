import { useEffect, useState } from "react";
import API from "../api/api";
import TaskForm from "../components/TaskForm";

function Dashboard(){

  const [tasks,setTasks] = useState([]);

  const fetchTasks = async()=>{
    const res = await API.get("/tasks/");
    setTasks(res.data);
  }

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if(!token){
      window.location.href="/";
    }else{
      fetchTasks();
    }
  },[])

  // Delete task function
  const deleteTask = async (id) => {
  try {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href="/";
  }

  // Update task function
  const updateTask = async (task) => {

  const title = prompt("New title", task.title);
  const description = prompt("New description", task.description);

  try {
    await API.put(`/tasks/${task.id}`, {
      title,
      description
    });

    fetchTasks();

  } catch (error) {
    console.log(error);
  }
};

  return(

    <div className="app-container">
  <div className="content-box">
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <TaskForm refreshTasks={fetchTasks}/>

      {tasks.map((task)=>(
        <div key={task.id}>

          <h4>{task.title}</h4>
          <p>{task.description}</p>

          <button onClick={()=>deleteTask(task.id)}>
            Delete
          </button>
          <button onClick={()=>updateTask(task)}>Edit</button>
        </div>
      ))}

    </div>
    </div>

  )
}

export default Dashboard