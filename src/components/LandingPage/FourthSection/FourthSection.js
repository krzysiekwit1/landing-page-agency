import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import "./fourthSection.scss"

const FourthSection = () => (
  <Row className="fourth-section-container py-0 mt-5" id="fourthSection">
    <Container fluid="md" className="my-5">
      <Row>
        <Col xs={12} md={6} className="left-container">
          <Row className="d-flex justify-content-center d-md-block">
            <h2 className="text-center text-md-left">
              Contact us for personalized offer
            </h2>
          </Row>
          <Row className="d-flex justify-content-center d-md-block pb-5 pb-md-0">
            <h5 className="text-center text-md-left">
              Our team will preapre the best marketing scenario for you
            </h5>
          </Row>
        </Col>
        <Col
          xs={12}
          md={6}
          className="right-container d-flex justify-content-center"
        >
          <Button className="right-container__button my-auto shadow-none">
            Contact Us !
          </Button>
        </Col>
      </Row>
    </Container>
  </Row>
)

export default FourthSection
