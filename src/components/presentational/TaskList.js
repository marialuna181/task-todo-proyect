import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({taks,searchText,handlerEdit}) => {
    const tareasFiltradas = taks.filter(taks => (
        taks.nombre.toUpperCase().indexOf(searchText.toUpperCase()) !== -1)
    )

    return(
        tareasFiltradas.map((item, index)=>(
            <TaskItem key={index} {...item} handlerEdit={handlerEdit} />
        ))
    )
}

export default TaskList