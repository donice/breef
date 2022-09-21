// import React, { useState } from 'react'
import './index.css'
import LandingPage from './components/pages/LandingPage'
import Register from './components/forms/Register';
import SignIn from './components/forms/SignIn';
import Account from './components/pages/Account';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sigin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  )
}

export default App;
