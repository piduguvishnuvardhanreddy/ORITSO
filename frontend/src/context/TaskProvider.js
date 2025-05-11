// src/context/TaskProvider.js
import React, { useState, useEffect } from 'react';
import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userDetails');
    return savedUser ? JSON.parse(savedUser) : { name: '' };
  });

  useEffect(() => {
    localStorage.setItem('userDetails', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks(prev => [...prev, task]);
  const updateTask = (updated) =>
    setTasks(prev => prev.map(task => (task.id === updated.id ? updated : task)));
  const deleteTask = (id) =>
    setTasks(prev => prev.filter(task => task.id !== id));
  const setUserDetails = (name) => setUser({ name });

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, user, setUserDetails }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;



