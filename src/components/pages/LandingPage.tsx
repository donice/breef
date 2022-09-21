// import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../forms/Register";
import SignIn from "../forms/SignIn";
import Account from "./Account";
import Footer from "../static/Footer";
import NavBar from "../static/NavBar";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-teal-900">
        <NavBar />
        <Hero />
      </div>
      <Footer />

      <Routes>
        <Route path='/sigin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  )
}

export default LandingPage;
