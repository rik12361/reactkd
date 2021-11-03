import React from 'react'
import Task from './Task'

const Tasks = ( { tasks, onDelete, onDoubleClick }) => {

    return (
        <div>
            { tasks.map ((task) => <Task key= { task.id } onDelete={ onDelete } onDoubleClick= {onDoubleClick} style={{ color: 'red'}} task={task}/> )}
        </div>
    )
}

export default Tasks