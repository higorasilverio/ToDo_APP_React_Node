import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

const Routes = props => {
    return (
    <HashRouter>
        <Route path='/todo' component={ Todo } />
        <Route path='/about' component={ About } />
        <Redirect from="*" to='/todo' />
    </HashRouter>
    )
}

export default Routes