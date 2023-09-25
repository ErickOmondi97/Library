import React, { Component } from 'react'
import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import Message from './components/Message/Message'
import Benefits from './components/Benefits/Benefits'


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Cards />
        <Message />
        <Benefits />
      </div>
    )
  }
}



export default App
