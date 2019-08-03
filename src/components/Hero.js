import React from "react"
import { Link } from "gatsby"

class Hero extends React.Component {
  render() {
    return (
      <section className="center-text">
        <div className="capital-font">
          <p>The wedding of</p>
        </div>
        <h1 className="script-font">Jess &amp; Alex</h1>
        <div className="capital-font">
          <p>Saturday 4th July 2020</p>
        </div>
        <a title="RSVP" href="https://forms.gle/gtgeemZCV1WkAkrRA">
          RSVP
        </a>
      </section>
    )
  }
}

export default Hero
