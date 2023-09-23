import React, { Component } from 'react'
import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Cards />
      </div>
    )
  }
}



export default App
