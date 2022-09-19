// import React, { useState } from 'react'
import './index.css'
import LandingPage from './components/pages/LandingPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <LandingPage />
      </div>

    </Router>

  )
}

export default App;
