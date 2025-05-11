import React, { useContext } from 'react';
import './index.css';
import TaskContext from '../../context/TaskContext';

const Nav = () => {
  const { user } = useContext(TaskContext);

  return (
    <nav className="nav">
      <h1>Task Manager</h1>
      <div className="user-info">👤 {user.name || 'Guest'}</div>
    </nav>
  );
};

export default Nav;
