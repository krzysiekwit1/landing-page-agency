import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/LandingPage/navBar/Navbar"
import FirstSection from "../components/LandingPage/FirstSection/FirstSection"
import SecondSection from "../components/LandingPage/SecondSection/SecondSection"
import ThirdSection from "../components/LandingPage/ThirdSection/ThirdSection"
import FourthSection from "../components/LandingPage/FourthSection/FourthSection"
import Footer from "../components/LandingPage/Footer/Footer"

class landing extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props)
    this.firstSceneRef = React.createRef()
  }
  state = {
    secondScene: false,
    thirdScene: false,
    fourthScene: false,
  }

  render() {
    return (
      <>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </>
    )
  }
}
export default landing
