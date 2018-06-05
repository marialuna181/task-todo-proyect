import React , { Component } from 'react'
import InputSearch from '../presentational/Input'
import TaskList from '../presentational/TaskList'

export default class ContainerTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            label: 'Buscar Tarea',
            searchText: '',
            name :'searchText',
            type: 'search'
        }

        this.handlerOnChange = this.handlerOnChange.bind(this)
    }


    handlerOnChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.searchText}</h1>
                <InputSearch   {...this.state} handlerOnChange={this.handlerOnChange} />
                <div>
                    {/* <TaskList /> */}
                </div>
            </div>
        )
    }
}