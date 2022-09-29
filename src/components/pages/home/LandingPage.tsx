import NavBar from "../../static/NavBar";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "../../static/Footer";
// import '../../../index.css'

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-teal-900">
      <NavBar />
      <Hero />
      <Services />
      <Footer />
      {/* <DashBoard /> */}
    </div>
  )
}

export default LandingPage;
