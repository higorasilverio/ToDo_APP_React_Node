import React from 'react'
import Card from 'react-bootstrap/Card'

import './PageHeader.css'

const PageHeader = props => (
    <Card className="pageHeader">
        <Card.Header className="name">{props.name}</Card.Header>
        <Card.Body>
            {props.children}
        </Card.Body>
    </Card>
)

export default PageHeader