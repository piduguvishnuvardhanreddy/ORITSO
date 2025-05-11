import React, { useState, useContext } from 'react';
import './index.css';
import TaskContext from '../../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);

  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addTask(newTask);
    setForm({ title: '', description: '', dueDate: '', status: 'pending' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
