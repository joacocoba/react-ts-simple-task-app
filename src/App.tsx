import { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import { Task } from './interfaces/Task'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

interface Props {
  title?: string
}

export const App = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Learn React",
    description: "Learn React",
    completed: false
  },
  {
    id: 2,
    title: "Learn NodeJs",
    description: "Learn NodeJs",
    completed: false
  }
  ])

  const getCurrentTimestamp = (): number => new Date().getTime();


  const addANewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getCurrentTimestamp(), completed: false }])
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="React Logo" style={{ width: '4rem' }} />
            {title}
          </a>
        </div>
      </nav>
      <main className='container p-4'>
        <div className="row">
          <div className='col-md-4'>
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className='col-md-8'>
            <div className="row">
              <TaskList tasks={tasks} removeTask={removeTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
