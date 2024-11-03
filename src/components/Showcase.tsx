import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const Showcase = () => {
  return (
    <section id="" className="showcase p-0">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img"
               style={{backgroundImage: "url('./bg-showcase-1.jpg')"}}></div>
          <div className="col-lg-6 order-lg-1 my-auto px-20 showcase-text">
            <h5 className="display-5">Fully Responsive Design</h5>
            <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look
              great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-lg-6 text-white showcase-img"
               style={{backgroundImage: "url('./bg-showcase-2.jpg')"}}></div>
          <div className="col-lg-6 my-auto px-20 showcase-text">
            <h5 className="display-5">Updated For Bootstrap 5</h5>
            <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way
              in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img"
               style={{backgroundImage: "url('./bg-showcase-3.jpg')"}}></div>
          <div className="col-lg-6 order-lg-1 my-auto px-20 showcase-text">
            <h5 className="display-5">Easy to Use &amp; Customize</h5>
            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some
              deeper customization options. Out of the box, just add your content and images, and your new landing page
              will be ready to go!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase;