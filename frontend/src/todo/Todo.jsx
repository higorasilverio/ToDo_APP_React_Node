import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './Todo.css'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleTaskDoneToggle = this.handleTaskDoneToggle.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ 
                ...this.state, 
                description, 
                list: resp.data
            }))
            .catch(error => console.log({error: error}))
    }
    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    handleAdd() {
        let description = this.state.description
        if (description !== '') {
            description = description.replace(/\s\s+/g, ' ')
            description !== ' ' ?
                axios.post(URL, { description }).then(() => this.refresh()).catch(error => console.log({error: error})) :
                this.refresh()
        }
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh(this.state.description))
            .catch(error => console.log({error: error}))
    }
    handleTaskDoneToggle(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: !todo.done})
            .then(() => this.refresh(this.state.description))
            .catch(error => console.log({error: error}))
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleClear() {
        this.refresh()
    }
    render() {
        return (
            <div className="todo">
                <PageHeader name="Tasks">
                    <TodoForm 
                        description={this.state.description}  
                        handleAdd={this.handleAdd} 
                        handleSearch={this.handleSearch}
                        handleChange={this.handleChange}
                        handleClear={this.handleClear} />
                    <TodoList 
                        list={this.state.list} 
                        handleRemove={this.handleRemove} 
                        handleTaskDoneToggle={this.handleTaskDoneToggle} />
                </PageHeader>
            </div>
        )
    }
}