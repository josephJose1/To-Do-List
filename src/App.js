import './App.css';
import FreeCodeLogo from './components/FreeCodeLogo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='task-App'>
      <FreeCodeLogo/>

      <div className='main-task-list'>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
