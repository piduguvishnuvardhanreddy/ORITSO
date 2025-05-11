import React, { useState, useContext } from 'react';
import './index.css';
import TaskContext from '../../context/TaskContext';

const UserDetails = () => {
  const { user, setUserDetails } = useContext(TaskContext);
  const [name, setName] = useState(user.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(name);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserDetails;
