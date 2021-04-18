import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = props => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <FontAwesomeIcon icon="calendar-alt" /> TodoApp
        </Navbar.Brand>
    </Navbar>
)

export default Menu