import React, { Component } from 'react'
import { useState } from 'react'
import './App.css'

/* COMPONENTS */
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import Message from './components/Message/Message'
import Benefits from './components/Benefits/Benefits'
import Coaching from './components/Coaching/Coaching'
import Courses from './components/Courses/Courses'
import Where from './components/Where/Where'
import Meet from './components/Meet/Meet'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Cards />
        <Message />
        <Benefits />
        <Coaching />
        <Courses />
        <Where />
        <Meet />
        <Footer />
      </div>
    )
  }
}



export default App
