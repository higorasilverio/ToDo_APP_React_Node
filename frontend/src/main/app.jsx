import React from 'react'

import './App.css'

import Menu from '../template/Menu'
import Routes from './Routes'

const App = props => {
  return (
    <div className="container-app">
      <Menu />
      <Routes />
    </div>
  )
}

export default App;
