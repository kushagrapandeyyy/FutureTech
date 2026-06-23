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
  const titleWrapRef = useRef(null)
  const contentRef = useRef(null)
  const heroContentRef = useRef(null)

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const isMobile = window.innerWidth < 768

    const keyboardMove = isMobile
      ? window.innerWidth * 0.25
      : window.innerWidth * 0.38

    const worksMove = isMobile
      ? -120
      : -1050

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2500',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    })

    /* =====================================
       PHASE 1
       Our + Works Layout Animation
    ===================================== */

    tl.to(
      keyboardRef.current,
      {
        x: keyboardMove,
        ease: 'none',
      },
      0
    )

    tl.to(
      worksRef.current,
      {
        x: worksMove,
        ease: 'none',
      },
      0
    )

    /* =====================================
       PHASE 2
       Push Old Content Up
    ===================================== */

    tl.to(
      heroContentRef.current,
      {
        y: -1000,
        ease: 'none',
      },
      0.6
    )

    /* =====================================
       PHASE 3
       Bring New Content Up
    ===================================== */

    tl.fromTo(
      contentRef.current,
      {
        y: 900,
      },
      {
        y: 0,
        ease: 'none',
      },
      0.6
    )
  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section
      ref={sectionRef}
      className="work-figma-hero"
      aria-label="Work hero showcase"
    >
      <div className="work-figma-hero__frame">

        <div
          ref={heroContentRef}
          className="work-figma-hero__moving-content"
        >
          <div
            ref={titleWrapRef}
            className="work-figma-hero__title-wrap"
          >
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

        <div
          ref={contentRef}
          className="work-figma-hero__content"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type
            specimen book.
          </p>

          <div className="work-figma-hero__line" />
        </div>

      </div>
    </section>
  )
}