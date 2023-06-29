import React from 'react';
import './Item.css';
import { BsTrash3, BsSlashSquare } from "react-icons/bs";

const Item = (props) => {
  const {task, deleteTask, editTask} = props
  return (
    <div className='list-item'>
        <p className='title'>{task.title}</p>

        <div className='btn-container'>
          <BsTrash3  className='btn' onClick={()=>deleteTask(task.id)} />
          <BsSlashSquare className='btn' onClick={()=>editTask(task.id)} />
        </div>
    </div>
  )
}

export default Item