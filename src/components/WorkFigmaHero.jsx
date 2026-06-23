import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorkFigmaHero.css'

gsap.registerPlugin(ScrollTrigger)

const KEYBOARD_SRC = '/images/work-hero/keyboard.png'

export default function WorkFigmaHero() {
  const sectionRef = useRef(null)
  const keyboardRef = useRef(null)
  const worksRef = useRef(null)

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const isMobile = window.innerWidth < 768

    // Keyboard movement
    const keyboardMove = isMobile
      ? window.innerWidth * 0.25
      : window.innerWidth * 0.38

    // Move Works further left
    const worksMove = isMobile
      ? -120
      : -1050

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1500',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    })
      .to(
        keyboardRef.current,
        {
          x: keyboardMove,
          ease: 'none',
        },
        0
      )
      .to(
        worksRef.current,
        {
          x: worksMove,
          ease: 'none',
        },
        0
      )
  }, sectionRef)

  return () => ctx.revert()
}, [])



  return (<section
    ref={sectionRef}
    className="work-figma-hero"
    aria-label="Work hero showcase"
  > <div className="work-figma-hero__frame">

      <div className="work-figma-hero__title-wrap">
        <h1 className="work-figma-hero__our-text">
          Our
        </h1>

        <h1
          ref={worksRef}
          className="work-figma-hero__works-text"
        >
          Works
        </h1>
      </div>

      <div
        ref={keyboardRef}
        className="work-figma-hero__keyboard work-figma-hero__keyboard--first"
      >
        <img
          src={KEYBOARD_SRC}
          alt=""
          draggable="false"
          loading="eager"
          className="work-figma-hero__keyboard-img"
        />
      </div>

    </div>
  </section>

  )
}
