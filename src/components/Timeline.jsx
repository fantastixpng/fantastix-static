import lodashThrottle from "https://cdn.skypack.dev/lodash.throttle@4.1.1";

const scrollContainer = document.querySelector('[data-scroller]')
const sections = gsap.utils.toArray('section')
const track = document.querySelector('[data-draggable]')
const navLinks = gsap.utils.toArray('[data-link]')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth

const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight

const getDraggableWidth = () => {
  return ((track.offsetWidth * 0.5) - lastItemWidth())
}

const updatePosition = () => {
  const left = track.getBoundingClientRect().left * -1
  const width = getDraggableWidth()
  const useableHeight = getUseableHeight()
  const y = gsap.utils.mapRange(0, width, 0, useableHeight, left)

  st.scroll(y)
}

const tl = gsap.timeline()
  .to(track, {
    x: () => getDraggableWidth() * -1,
    ease: 'none'
  })

const st = ScrollTrigger.create({
  animation: tl,
  scrub: 0,
})

const draggableInstance = Draggable.create(track, {
  type: 'x',
  inertia: true,
  bounds: {
    minX: 0,
    maxX: getDraggableWidth() * -1
  },
  edgeResistance: 1,
  onDragStart: () => st.disable(),
  onDragEnd: () => st.enable(),
  onDrag: updatePosition,
  onThrowUpdate: updatePosition
})

const initSectionAnimation = () => {
  /* Do nothing if user prefers reduced motion */
  if (prefersReducedMotion.matches) return

  sections.forEach((section, index) => {
    const heading = section.querySelector('h2')
    const image = section.querySelector('.section__image')

    /* Set animation start state */
    gsap.set(heading, {
      opacity: 0,
      y: 50
    })
    gsap.set(image, {
      opacity: 0,
      rotateY: 15
    })

    /* Create the timeline */
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => 'top center',
        end: () => `+=${window.innerHeight}`,
        toggleActions: 'play reverse play reverse',
        // toggleClass: 'is-active',
        // markers: true,
      }
    })

    /* Add tweens to the timeline */
    sectionTl.to(image, {
      opacity: 1,
      rotateY: -5,
      duration: 6,
      ease: 'elastic'
    })
      .to(heading, {
        opacity: 1,
        y: 0,
        duration: 2
      }, 0.5)

    /* Create a new timeline to add an active class to the nav link for the current section */
    const sectionTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 20px',
        end: () => `bottom top`,
        toggleActions: 'play none play reverse',
        onToggle: ({ isActive }) => {
          const sectionLink = navLinks[index]

          if (isActive) {
            sectionLink.classList.add('is-active')
          } else {
            sectionLink.classList.remove('is-active')
          }
        }
      }
    })
  })
}

initSectionAnimation()

/* Allow navigation via keyboard */
track.addEventListener('keyup', (e) => {
  const id = e.target.getAttribute('href')
  if (!id || e.key !== 'Tab') return

  const section = document.querySelector(id)
  const y = section.getBoundingClientRect().top + window.scrollY

  st.scroll(y)
})


let style = `

* {
  box-sizing: border-box;
}

html {
  overscroll-behavior: contain;
  
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
}

body {
  --activeColor: rgb(240 240 240);
  --navBgColor: rgb(37 38 41);
  --navTextColor: rgb(144 144 150);
  --mainBg: rgb(20 20 23);
  font-family: 'Syncopate', sans-serif;
  min-height: 100vh;
  margin: 0;
  color: rgb(20 20 23);
  background: var(--mainBg);
}

img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}

section {
  --h: calc(var(--i) * 30);
  
  min-height: 100vh;
  padding: 8rem 0 max(5vh, 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--h, 0) 75% 60%);
}

.container {
  width: 100%;
  max-width: 80rem;
  padding: 0 max(5vw, 1rem);
  transform-style: perspective-3d;
  perspective: 900px;
  
  @media (min-width: 32em) {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 1rem;
  }
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--navBgColor);
  color: var(--navTextColor);
  z-index: 2;
  height: 6rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 1.7rem;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background: currentColor;
    pointer-events: none;
  }
}

.marker {
  position: fixed;
  top: 1.75rem;
  left: 4rem;
  width: 1rem;
  height: 1rem;
  transform: translate3d(-50%, -50%, 0);
  background: var(--activeColor);
  border-radius: 100%;
  z-index: 2000;
  
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0.2rem);
    right: 100%;
    width: 4rem;
    height: 0.4rem;
    background-color: var(--activeColor);
  }
}

.nav__track {
  position: relative;
  min-width: max(200rem, 200%);
  padding: 1.5rem max(100rem, 100%) 0 0;
  height: 6rem;
}

.nav__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.nav__link {
  position: relative;
  display: block;
  min-width: 8rem;
  padding: 2.25rem 1rem 0.5rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  z-index: 1;
  transition: color 150ms;
  
  &:hover,
  &:focus {
    color: var(--activeColor);
    text-decoration: underline;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0.65rem;
    height: 0.65rem;
    background-color: currentColor;
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
    transform-origin: center center;
  }
  
  span {
    display: block;
    transition: transform 200ms;
  }
  
  &.is-active {
    span {
      transform: scale(1.4);
      color: var(--activeColor);
    }
    
    &::after {
      display: none;
    }
  }
}

.section__heading {
  font-size: clamp(2rem, 12vmin, 7rem);
  line-height: 1;
  letter-spacing: -0.06em;
  margin: 0 0 1rem;
  grid-row: 1;
  grid-column: 1 / span 7;
  align-self: end;
  position: relative;
  z-index: 1;
  
  span {
    display: block;
  }
  
  span:first-child {
    font-size: clamp(1rem, 10vmin, 5rem);
  }
  
  span:nth-child(2) {
    word-break: break-word;
  }
}

.section__image {
  grid-row: 1;
  grid-column: 5 / span 3;
  position: relative;
  box-shadow: 0.45rem 0.45rem 8rem rgb(0 0 0 / 0.3);
  align-self: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: hsl(var(--h, 0) 50% 50%);
    mix-blend-mode: screen;
  }
  
  img {
    filter: brightness(0.5) grayscale(100%);
  }
}
`



const Timeline = () => (
  <>
    <nav>
      {/*Shows our position on the timeline*/}
      <div className="marker"></div>

      {/*Draggable element*/}
      <div className="nav__track" data-draggable>
        <ul className="nav__list">
          <li>
            <a href="#section_1" className="nav__link" data-link><span>1993</span></a>
          </li>
          <li>
            <a href="#section_2" className="nav__link" data-link><span>1995</span></a>
          </li>
          <li>
            <a href="#section_3" className="nav__link" data-link><span>1997</span></a>
          </li>
          <li>
            <a href="#section_4" className="nav__link" data-link><span>2000</span></a>
          </li>
          <li>
            <a href="#section_5" className="nav__link" data-link><span>2001</span></a>
          </li>
          <li>
            <a href="#section_6" className="nav__link" data-link><span>2003</span></a>
          </li>
          <li>
            <a href="#section_7" className="nav__link" data-link><span>2007</span></a>
          </li>
          <li>
            <a href="#section_8" className="nav__link" data-link><span>2011</span></a>
          </li>
          <li>
            <a href="#section_9" className="nav__link" data-link><span>2016</span></a>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <section id="section_1" style="--i: 0">
        <div className="container">
          <h2 className="section__heading">
            <span>1993</span>
            <span>Pablo Honey</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_pablo-honey.jpg" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_2" style="--i: 1">
        <div className="container">
          <h2 className="section__heading">
            <span>1995</span>
            <span>The Bends</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_the-bends.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_3" style="--i: 2">
        <div className="container">
          <h2 className="section__heading">
            <span>1997</span>
            <span>OK Computer</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_ok-computer.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_4" style="--i: 3">
        <div className="container">
          <h2 className="section__heading">
            <span>2000</span>
            <span>Kid A</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_kid-a.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_5" style="--i: 4">
        <div className="container">
          <h2 className="section__heading">
            <span>2001</span>
            <span>Amnesiac</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_amnesiac.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_6" style="--i: 5">
        <div className="container">
          <h2 className="section__heading">
            <span>2003</span>
            <span>Hail to the Thief</span>
          </h2>
          <div className="section__image" style="--i: 6">
            <img src="https://assets.codepen.io/85648/radiohead_hail-to-the-thief.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_7" style="--i: 7">
        <div className="container">
          <h2 className="section__heading">
            <span>2007</span>
            <span>In Rainbows</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_in-rainbows.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_8" style="--i: 8">
        <div className="container">
          <h2 className="section__heading">
            <span>2011</span>
            <span>The King of Limbs</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_king-of-linbs.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
      <section id="section_9" style="--i: 9">
        <div className="container">
          <h2 className="section__heading">
            <span>2016</span>
            <span>A Moon Shaped Pool</span>
          </h2>
          <div className="section__image">
            <img src="https://assets.codepen.io/85648/radiohead_a-moon-shaped-pool.webp" width="1200" height="1200" />
          </div>
        </div>
      </section>
    </main>
  </>
)

export default Timeline