import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <Navbar/>
    </Router>
  )
}

export default App
