import React, { useContext } from 'react';
import './index.css';
import TaskContext from '../../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="task-item">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p><strong>Due:</strong> {task.dueDate}</p>
        <p><strong>Status:</strong> {task.status}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
