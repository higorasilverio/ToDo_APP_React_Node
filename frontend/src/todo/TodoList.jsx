import React from 'react'
import Table from 'react-bootstrap/Table'

import IconButton from '../template/IconButton'

import './TodoList.css'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}  className='table-row'>
                <td className={todo.done ? 'done' : ''}>{todo.description}</td>
                <td className='table-data-actions'>
                    <IconButton 
                        hide={todo.done}
                        buttonStyle='success' 
                        icon='calendar-check' 
                        onClick={() => props.handleTaskDoneToggle(todo)} />
                    <IconButton 
                        hide={!todo.done}
                        buttonStyle='warning' 
                        icon='calendar-day' 
                        onClick={() => props.handleTaskDoneToggle(todo)} />
                    <IconButton 
                        hide={!todo.done}
                        buttonStyle='danger' 
                        icon='calendar-times' 
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <Table striped bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="table-actions">Actions</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                {renderRows()}
            </tbody>
        </Table>
    )
}

export default TodoList