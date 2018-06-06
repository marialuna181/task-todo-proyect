import React , { Component } from 'react'
import InputSearch from '../presentational/Input'
import TaskList from '../presentational/TaskList'
import Button from '../presentational/Button'

export default class ContainerTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            label: 'Buscar Tarea',
            searchText: '',
            name :'searchText',
            type: 'search',
            taks: [
                {id: '0', nombre: 'Renovar pasarela pagos', descripcion: 'Actualizar validaciones en servicio de cargo directo', progreso: 'pendiente'},
                {id: '1', nombre: 'Corregir script landing', descripcion: 'Corrección de los script de GTM (google tag manager)', progreso: 'proceso'},
                {id: '2', nombre: 'Cambiar idioma en calendario', descripcion: 'El calendario del formulario debe mostrarse en español', progreso: 'pendiente'},
                {id: '3', nombre: 'Modificar formulario pago debe validar CVV', descripcion: 'El formulario de pago debe mostrar una validacion si se ingresa un CVV incorrecto', progreso: 'proceso'},
                {id: '4', nombre: 'Actualizar Politica de proteccion de datos', descripcion: 'Actualizar las nuevas politicas de proteccion de datos', progreso: 'terminado'}
            ]
        }

        this.handlerOnChange = this.handlerOnChange.bind(this)
        this.handlerCrearTask = this.handlerCrearTask.bind(this)
        this.handlerEditTask = this.handlerEditTask.bind(this)
    }


    handlerOnChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handlerCrearTask(){
        alert('Crear Task')
    }

    handlerEditTask(e){
        alert('Edit Task .. '+this.state.taks[e.target.id].nombre)
    }

    render(){
        const sectionButton = {width:'30%',padding: '10px 0px 10px 10px',margin: '10px 0px 40px 10px'}
        return(
            <div>
                <InputSearch   {...this.state} handlerOnChange={this.handlerOnChange} />
                <div>
                    <TaskList {...this.state} handlerEdit={this.handlerEditTask} />
                    <div style={sectionButton}>
                        <Button handlerEvent={this.handlerCrearTask} value="Crear Task" />
                    </div>
                </div>
            </div>
        )
    }
}