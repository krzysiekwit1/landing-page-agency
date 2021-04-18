import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Navbar from "../components/LandingPage/navBar/Navbar"
import FirstSection from "../components/LandingPage/FirstSection/FirstSection"
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
      </>
    )
  }
}
export default landing
