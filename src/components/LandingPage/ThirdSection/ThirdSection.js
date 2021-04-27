import React, { useRef, useEffect } from "react"
import { Row } from "react-bootstrap"
import { gsap } from "gsap"
import "./thirdSection.scss"
const ThirdSection = () => {
  const partnersRef = useRef(null)

  useEffect(() => {
    const partners = partnersRef.current.querySelectorAll(".partner-container")
    let partnerWidth = window.innerWidth * 0.17
    switch (true) {
      case window.innerWidth < 576:
        partnerWidth = window.innerWidth * 0.35 + 15
        break
      case window.innerWidth >= 576 && window.innerWidth < 768:
        partnerWidth = window.innerWidth * 0.3 + 15
        break
      case window.innerWidth >= 768 && window.innerWidth < 992:
        partnerWidth = window.innerWidth * 0.25 + 15
        break
      case window.innerWidth >= 992 && window.innerWidth < 1200:
        partnerWidth = window.innerWidth * 0.2 + 15
        break
      default:
        break
    }
    gsap.set(partners, {
      x: function (i) {
        return i * partnerWidth // starting position for every testimonial
      },
    })
    const totalRowWidth = partnerWidth * partners.length
    const mod = gsap.utils.wrap(0, totalRowWidth) // x position after full cycle
    const slideAnimation = gsap.to(partners, {
      x: "+=" + totalRowWidth, // distance for every testimonial
      modifiers: {
        x: x => mod(parseFloat(x)) + "px",
      },
      duration: partners.length * 7,
      ease: "none",
      repeat: -1,
    })
    const partnersContainer = document.querySelector(".third-section-container")
    const partnerContainers = document.querySelectorAll(".partner-container")
    console.log(partnerContainers)
    partnersContainer.addEventListener("mouseenter", function () {
      partnerContainers.forEach(e => (e.style.transition = "2s"))
      slideAnimation.pause()
    })
    partnersContainer.addEventListener("mouseleave", function () {
      partnerContainers.forEach(e => (e.style.transition = "none"))

      slideAnimation.play()
    })
  }, [])

  return (
    <>
      <Row className="d-flex justify-content-center third-section-container-title pt-5">
        <h1> Our Contributors</h1>
      </Row>
      <Row className="third-section-container">
        <div className="partners-container" ref={partnersRef}>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick pt-1">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
          <div className="partner-container">
            <div className="image-container">
              <div className="image-container__img"></div>
            </div>
            <div className="description-container">
              <h2 className="description-container__nick">Nick</h2>
              <h4 className="description-container__sub-count">Subs:120k </h4>
            </div>
          </div>
        </div>
      </Row>
    </>
  )
}

export default ThirdSection
