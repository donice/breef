// import React, { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App bg-gradient-to-r from-gray-900 to-teal-900">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App;
