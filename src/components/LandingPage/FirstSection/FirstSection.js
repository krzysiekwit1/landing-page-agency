import ReactDOM from "react-dom"
import React, { useEffect, useState } from "react"
import { Row, Col, Button, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
  faGoogle,
  faAdversal,
  faAmazon,
  faYahoo,
  faReddit,
  faSafari,
  faHtml5,
  faCss3,
  faSnapchat,
  faShopify,
  faSpotify,
  faWordpress,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import {
  faBoxOpen,
  faBox,
  faCopyright,
  faAddressBook,
  faAmbulance,
  faAngleDown,
  faAppleAlt,
  faAmericanSignLanguageInterpreting,
} from "@fortawesome/free-solid-svg-icons"
import "./firstSection.scss"
import "./iconsAnimation.scss"

let iconsArray = [
  { icon: faLinkedin },
  { icon: faYoutube },
  { icon: faFacebook },
  { icon: faInstagram },
  { icon: faGoogle },
  { icon: faAdversal },
  { icon: faAmazon },
  { icon: faYahoo },
  { icon: faReddit },
  { icon: faSafari },
  { icon: faHtml5 },
  { icon: faCss3 },
  { icon: faSnapchat },
  { icon: faShopify },
  { icon: faSpotify },
  { icon: faWordpress },
  { icon: faTelegram },
  { icon: faWhatsapp },
]

const setIconProp = () => {
  const iconsContainerHeight = document.getElementById("iconsContainer")
    .offsetHeight
  const iconsContainerWidth = document.getElementById("iconsContainer")
    .offsetWidth
  iconsArray.map(function (icon, index) {
    //colors
    icon.r = 50
    icon.g = Math.floor(Math.random() * 168) + 50
    icon.b = 168
    //positions
    icon.positionX = iconsContainerWidth / 2 - 15
    icon.positionY = iconsContainerHeight - 10
  })
}

const changeIconColor = (e, pastColor) => {
  const target = e.target
  target.style.color = "rgb(239, 202, 8)"
  setTimeout(function () {
    target.style.color = pastColor
  }, 3000)
}

const FirstSection = () => {
  const [iconsSet, setIconsSet] = useState(false)
  useEffect(() => {
    setIconProp()
    setIconsSet(true)
    window.addEventListener("resize", setIconProp())
  }, [])

  return (
    <>
      <Row className="first-section-container mt-5" id="firstSection">
        <div className="top-triangle"></div>
        <Container fluid="lg" className="content">
          <Row className="pt-5 py-1 px-3 px-lg-0">
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center justify-content-md-start"
            >
              <h1 className="content__join-us">Join Us</h1>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center justify-content-md-end"
            >
              <Button className="py-2 px-5 py-1 content__sign-in">
                Sign In
              </Button>
              <Button className="px-4 ml-4 py-1 content__sign-up">
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row className="mt-md-5 pt-3 pl-0 pl-lg-3 px-4 px-lg-0">
            <Col
              xs={12}
              md={6}
              className="title pr-3 pr-md-0 pr-lg-3 pt-0 pt-md-5"
            >
              <Row className="d-flex justify-content-center justify-content-md-start">
                <span className="title__content">Let</span>
                <span className="title__content title__content--us">Us</span>
                <span className="title__content">Advertise</span>
              </Row>
              <Row className="d-flex justify-content-center justify-content-md-start">
                <span className="title__content title__content--your">
                  Your
                </span>
                <span className="title__content">Product</span>
              </Row>
              <Row className="text-center text-md-left">
                <h4 className="pt-3">
                  Let us create best advertisment personalized for you, you'll
                  get best verified influencers. Make your brand recognizable.
                </h4>
              </Row>
            </Col>
            <Col
              xs={12}
              md={6}
              className="icons-container pl-3 pl-md-0 pl-lg-3 pr-4"
              id="iconsContainer"
              style={{ position: "relative" }}
            >
              {iconsSet &&
                iconsArray.map((icon, index) => (
                  <FontAwesomeIcon
                    key={index}
                    onClick={e =>
                      changeIconColor(e, `rgb(${icon.r}+${icon.g}+${icon.b})`)
                    }
                    icon={icon.icon}
                    size="3x"
                    style={{
                      color: `rgb(${icon.r}+${icon.g}+${icon.b})`,
                      position: "absolute",
                      left: `${icon.positionX}`,
                      top: `${icon.positionY}`,
                    }}
                  />
                ))}
              <Row className="box-container d-flex justify-content-center w-100">
                <FontAwesomeIcon
                  id="box"
                  className="boxIcon"
                  icon={faBoxOpen}
                  size="5x"
                  style={{
                    left: `${iconsArray[0].positionX - 35}`,
                    top: `${iconsArray[0].positionY - 5}`,
                  }}
                />
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="py-5 fake-row w-100 "></Row>
        <div className="bottom-triangle"></div>
        <div className="partners-container d-flex justify-content-start">
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faCopyright}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAngleDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAppleAlt}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAmbulance}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAmericanSignLanguageInterpreting}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAddressBook}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faCopyright}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAngleDown}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAppleAlt}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAmbulance}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAmericanSignLanguageInterpreting}
            size="2x"
          />
          <FontAwesomeIcon
            className="partners-container__partner"
            icon={faAddressBook}
            size="2x"
          />
        </div>
        <h3 className="our-partners">Our Partners</h3>
      </Row>
    </>
  )
}

export default FirstSection
