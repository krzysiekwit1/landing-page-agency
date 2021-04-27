import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./secondSection.scss"
import chartSVG from "../../../assets/images/svg/chart.svg"
import callCenterSVG from "../../../assets/images/svg/callCenter.svg"
import aiSVG from "../../../assets/images/svg/ai.svg"

const SecondSection = () => {
  const [elementRevealed, setElementRevealed] = useState(0)

  useEffect(() => {
    let elementsActive = 0
    window.addEventListener("scroll", event => {
      const scrollBottomHeight = window.scrollY + window.innerHeight

      const firstElementHeight = document.getElementById(
        "secondSectionFirstElement"
      ).offsetTop
      const secondElementHeight = document.getElementById(
        "secondSectionSecondElement"
      ).offsetTop
      const thirdElementHeight = document.getElementById(
        "secondSectionThirdElement"
      ).offsetTop

      if (
        elementsActive === 0 &&
        scrollBottomHeight > firstElementHeight + 300
      ) {
        setElementRevealed(elementRevealed + 1)
        elementsActive = 1
      }

      if (
        elementsActive === 1 &&
        scrollBottomHeight > secondElementHeight + 300
      ) {
        setElementRevealed(2)
        elementsActive = 2
      }

      if (
        elementsActive === 2 &&
        scrollBottomHeight > thirdElementHeight + 200
      ) {
        setElementRevealed(3)
        elementsActive = 3
      }
    })
  }, [])

  return (
    <Row className="second-section-container pb-5" id="secondSection">
      <Container fluid="md">
        <FirstElement elementRevealed={elementRevealed} />
        <SecondElement elementRevealed={elementRevealed} />
        <ThirdElement elementRevealed={elementRevealed} />
      </Container>
    </Row>
  )
}

const FirstElement = ({ elementRevealed }) => (
  <Row
    className={
      elementRevealed >= 1
        ? "mt-lg-5 pt-lg-5 second-section-container__first-element-active"
        : "mt-lg-5 pt-lg-5 second-section-container__first-element"
    }
    id="secondSectionFirstElement"
  >
    <Col xs={12} md={5} className="mt-3 pt-3 mt-md-5 pt-md-5">
      <Row className="d-flex justify-content-center d-md-block">
        <h1 className="px-3 px-md-0 text-center text-md-left">
          Easy Access to all your statistics
        </h1>
      </Row>
      <Row>
        <h4 className="pt-2 pt-lg-4 px-3 px-md-0 text-center text-md-left ">
          With our services you get access to all data related with your
          advertise. Watch your progress, with our advisement.
        </h4>
      </Row>
    </Col>
    <Col
      xs={12}
      md={{ span: 6, offset: 1 }}
      className="pt-3 pt-md-5  d-flex justify-content-center"
    >
      <img
        className="second-section-container__chartImage"
        src={chartSVG}
      ></img>
    </Col>
  </Row>
)

const SecondElement = ({ elementRevealed }) => (
  <Row
    className={
      elementRevealed >= 2
        ? "pt-3 mt-4 pt-lg-5 mt-lg-5 second-section-container__second-element-active"
        : "pt-3 mt-4 pt-lg-5 mt-lg-5 second-section-container__second-element"
    }
    id="secondSectionSecondElement"
  >
    <Col
      xs={12}
      md={6}
      className="d-block d-md-none text-left mt-1 mt-lg-3 pt-3 pt-md-0"
    >
      <Row className="d-flex justify-content-center">
        <h1 className="px-3 text-center text-md-left">
          Our Employees are available 24/7{" "}
        </h1>
      </Row>
      <Row className="text-left">
        <h4 className="pt-2 pt-lg-4 px-3 text-center">
          Our platform and services are avaiable 24/7 so you can contact with us
          with any issue
        </h4>
      </Row>
    </Col>
    <Col
      xs={12}
      md={6}
      className="pt-3 pt-lg-0 d-flex justify-content-center d-md-block"
    >
      <img
        className="second-section-container__callCenterImage"
        src={callCenterSVG}
      ></img>
    </Col>
    <Col xs={12} md={6} className="d-none d-md-block mt-1 mt-lg-3">
      <Row>
        <h1 className="px-3 text-center text-md-left">
          Our Employees are available 24/7{" "}
        </h1>
      </Row>
      <Row className="text-left">
        <h4 className="pt-2 pt-lg-4 px-3 text-center text-md-left">
          Our platform and services are avaiable 24/7 so you can contact with us
          with any issue
        </h4>
      </Row>
    </Col>
  </Row>
)

const ThirdElement = ({ elementRevealed }) => (
  <Row
    className={
      elementRevealed === 3
        ? "mt-4 mt-lg-5 pt-3 pt-lg-5 second-section-container__third-element-active"
        : "mt-4 mt-lg-5 pt-3 pt-lg-5 second-section-container__third-element"
    }
    id="secondSectionThirdElement"
  >
    <Col xs={12} md={6} className="mt-3 mt-lg-4 pt-3 pt-lg-4">
      <Row className="d-flex justify-content-center d-md-block">
        <h1 className="px-3 text-center text-md-left">
          Let us integrate all your advertising media{" "}
        </h1>
      </Row>
      <Row className="pt-2 text-center text-md-left">
        <h4 className="pt-2 pt-lg-4 px-3 text-center text-md-left">
          We prepare data from your advertising media in one place, and use our
          AI to draw best conclusions.
        </h4>
      </Row>
    </Col>
    <Col
      xs={12}
      md={6}
      className="d-flex justify-content-center d-md-block mt-3 mt-md-0 pl-lg-5"
    >
      <img className="second-section-container__aiImage" src={aiSVG}></img>
    </Col>
  </Row>
)

export default SecondSection
