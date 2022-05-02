import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/Task'

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
  addANewTask: (task: Task) => void
}

export default function TaskForm({ addANewTask }: Props) {
  const initialState = {
    title: '',
    description: ''
  }

  const [task, setTask] = useState(initialState)

  const handleOnChange = (e: HandleInputChange) => {
    e.preventDefault()
    setTask({
      ...task, [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task)
    setTask(initialState)
  }

  return (
    <div className='card card-body bg-secondary text-dark'>
      <h1>Add Task</h1>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name='title'
          placeholder="Write a title"
          className='form-control mb-3 rounded-0 shadow-none border-0'
          onChange={handleOnChange}
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="Insert description"
          rows={2}
          className='form-control mb-3 rounded-0 shadow-none border-0'
          onChange={handleOnChange}
          value={task.description}
        />
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  )
}
