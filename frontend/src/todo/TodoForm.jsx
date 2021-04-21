import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import IconButton from '../template/IconButton'
import './TodoForm.css'

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') e.shiftKey ? props.handleSearch() : props.handleAdd()
        else if (e.key === 'Escape') props.handleClear()
    }
    return (
        <Container fluid role='form' className='todo-form'>
            <Row>
                <Col sm={12} md={9} lg={10} className='col-input'>
                    <input 
                        className='form-control'
                        placeholder='Add a task' 
                        value={props.description} 
                        onChange={props.handleChange}
                        onKeyUp={keyHandler} />
                </Col>
                <Col sm={12} md={3} lg={2} className='col-button'>
                    <IconButton 
                        buttonStyle='primary' 
                        icon='calendar-plus' 
                        onClick={props.handleAdd} />
                    <IconButton 
                        hide={!props.description}
                        buttonStyle='info' 
                        icon='search' 
                        onClick={props.handleSearch} />
                    <IconButton 
                        hide={!props.description}
                        buttonStyle='dark' 
                        icon='trash-restore-alt' 
                        onClick={props.handleClear} />
                </Col>
            </Row>
        </Container>
    )
}

export default TodoForm