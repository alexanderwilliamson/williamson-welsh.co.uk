import React from "react"
import "./Hero.Module.css"

class Hero extends React.Component {
  render() {
    return (
      <section className="hero" id="top">
        <div className="hero-wedding-of">
          <p>The wedding of</p>
        </div>
        <h1 className="script-font">Jess &amp; Alex</h1>
        <div className="hero-date">
          <p>Saturday 4th July 2020</p>
        </div>
        <p className="rsvp-container">
          <a title="rsvp" href="https://forms.gle/5BkGPZpdp1tx8wZa8">
            R.S.V.P.
          </a>
        </p>
      </section>
    )
  }
}

export default Hero
