import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = props => (
    <Navbar bg="dark" variant="dark" expand="lg" style={{borderRadius: 5}}>
        <Navbar.Brand href="#todo">
            <FontAwesomeIcon icon="calendar-alt" /> Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#todo">Todo</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Menu