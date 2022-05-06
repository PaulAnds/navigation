import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class zBoxes extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            items: [
                {
                    id: uuidv4(),
                    task: 'Estudiar Web',
                },

                {
                    id: uuidv4(),
                    task: 'Hacer Tarea',
                },

                {
                    id: uuidv4(),
                    task: 'Ver One Piece',
                },
                
            ],
        }
        
    }
    
    handleOnChange = e => {
        const {target:{value}} = e;

        this.setState({
            task: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();

        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                    }
                ]
            })
        }
    }
    
    render() {

        console.log(this.state.items);
        //console.log(this.state.task);
        return (
            <div className="Todo">
                <h1>Nueva Tarea</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type = "text"
                        value = {this.state.task}
                        onChange = {this.handleOnChange}
                    />
                </form>

                <List 
                    items ={this.state.items}
                    markAsCompleted = {this.markAsCompleted}
                    removeTask = {this.removeTask}
                />

            </div>


        );
    }
}

export default zBoxes;