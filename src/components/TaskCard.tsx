import React from 'react'
import { Task } from '../interfaces/Task'

interface Props {
  task: Task
  removeTask: (id: number) => void
}

export default function TaskCard({ task, removeTask }: Props) {
  return (
    <div className='card card-body bg-secondary text-dark'>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed}</p>
      <button className='btn btn-danger' onClick={() => task.id && removeTask(task.id)}>
        Delete
      </button>
    </div>
  )
}
