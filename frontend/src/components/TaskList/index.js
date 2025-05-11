import { useContext } from 'react';
import './index.css';
import TaskItem from '../TaskItem';
import TaskContext from '../../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks added yet.</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
