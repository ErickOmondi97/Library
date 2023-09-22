import React, { Component } from 'react'
import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <Menu /> */}
      </div>
    )
  }
}



export default App
