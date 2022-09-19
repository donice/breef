// import React from "react";
import Register from "../forms/Register";
import SignIn from "../forms/SignIn";
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
      <Register />
      <SignIn />
      <Footer />

    </div>
  )
}

export default LandingPage;
