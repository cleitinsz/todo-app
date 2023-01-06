import React from 'react'
import styles from './styles.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill size={28}/> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted: ""}>{task.title}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={28}/>
      </button>
    </div>
  )
}

export default Task