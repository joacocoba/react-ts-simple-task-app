import React from 'react'
import { Task } from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props {
  tasks?: Task[]
  removeTask: (id: number) => void;
}

export default function TaskList({ tasks, removeTask }: Props) {
  return (
    <>
      {
        tasks?.map(task => {
          return (
            <div className='col-md-4 pb-3'>
              <TaskCard task={task} removeTask={removeTask} />
            </div>
          )

        })
      }
    </>
  )
}
