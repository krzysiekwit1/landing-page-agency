import React, { useRef, useEffect } from "react"
import { Row } from "react-bootstrap"
import { gsap } from "gsap"
import "./thirdSection.scss"
const ThirdSection = () => {
  const partnersRef = useRef(null)
  const partnersArray = [
    { nick: "Nick", subs: "180k" },
    { nick: "Nick", subs: "120k" },
    { nick: "Nick", subs: "150k" },
    { nick: "Nick", subs: "170k" },
    { nick: "Nick", subs: "130k" },
    { nick: "Nick", subs: "160k" },
    { nick: "Nick", subs: "120k" },
    { nick: "Nick", subs: "130k" },
    { nick: "Nick", subs: "140k" },
    { nick: "Nick", subs: "150k" },
    { nick: "Nick", subs: "160k" },
    { nick: "Nick", subs: "170k" },
    { nick: "Nick", subs: "180k" },
    { nick: "Nick", subs: "190k" },
  ]
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
        return i * partnerWidth
      },
    })
    const totalRowWidth = partnerWidth * partners.length
    const mod = gsap.utils.wrap(0, totalRowWidth)
    const slideAnimation = gsap.to(partners, {
      x: "+=" + totalRowWidth,
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
      <Row className="third-section-container" id="thirdSection">
        <div className="partners-container" ref={partnersRef}>
          {partnersArray.map(partner => (
            <div className="partner-container">
              <div className="image-container">
                <div className="image-container__img"></div>
              </div>
              <div className="description-container">
                <h2 className="description-container__nick">{partner.nick}</h2>
                <h4 className="description-container__sub-count">
                  Subs:{partner.subs}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  )
}

export default ThirdSection
