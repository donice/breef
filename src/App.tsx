// import React, { useState } from 'react'
import './index.css'
import LandingPage from './components/pages/LandingPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App bg-gradient-to-r from-gray-900 to-teal-900">
        <LandingPage />
      </div>

    </Router>

  )
}

export default App;
