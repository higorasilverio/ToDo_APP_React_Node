import React from 'react'
import Card from 'react-bootstrap/Card'

const PageHeader = props => (
    <Card style={{marginTop: '1vh'}}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
            <Card.Title>{props.small}</Card.Title>
        </Card.Body>
    </Card>
)

export default PageHeader