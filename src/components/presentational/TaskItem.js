import React from 'react'
import styles from '../../css/TaskItem.css'

const TaskItem = ({id, nombre,descripcion,progreso,handlerEdit}) =>{
    const estado = ( progreso === "pendiente" ? pendiente : (progreso === "proceso" ? proceso : (progreso === "terminado" ? terminado: '')))
    return(
        <div style={container} id={id} onClick={handlerEdit}> 
            <div style={estado} ></div>
            <h2 style={title}>{nombre}</h2>
            <p><b>Descripción:</b> {descripcion}</p>
        </div>
    )
}

const container = {
    fontFamily : ['Arial Narrow', 'Arial', 'sans-serif'],
    margin: '10px',
    border: '1px solid #6c757d',
    borderRadius: '10px',
    padding: '10px',
    width: '30%',
    cursor: 'pointer'
}

const title = {
    paddding : '0px',
    margin: '0px 0px 0px 10px',
    display: 'inline-block',
    width: '80%',
    verticalAlign: 'middle'
}

const pendiente = {
    background: '#FF0000',
    width: 10 ,
    height: 10,
    display: 'inline-block'
}

const proceso = {
    background: '#FFFF00',
    width: 10 ,
    height: 10,
    display: 'inline-block'
}

const terminado = {
    background: '#3ADF00',
    width: 10 ,
    height: 10,
    display: 'inline-block'
}

export default TaskItem