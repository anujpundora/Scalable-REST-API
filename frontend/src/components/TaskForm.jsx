import { useState } from "react";
import API from "../api/api";

function TaskForm({ refreshTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks/", {
        title,
        description
      });

      setTitle("");
      setDescription("");

      refreshTasks();

    } catch (error) {
      console.log(error);
      alert("Error creating task");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">
        Create Task
      </button>

    </form>
  );
}

export default TaskForm;