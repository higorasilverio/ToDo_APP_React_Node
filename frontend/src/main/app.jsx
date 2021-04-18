import React from 'react'

import './App.css'

import Todo from '../todo/Todo'
import About from '../about/About'
import Menu from '../template/Menu'

const App = props => {
  return (
    <div className="container-app">
      <Menu />
      <About />
      <Todo />
    </div>
  )
}

export default App;
