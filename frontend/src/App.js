
import  TaskProvider  from './context/TaskProvider';
import Nav from './components/Nav';
import UserDetails from './components/UserDetails';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <Nav />
        <UserDetails />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

