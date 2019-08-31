import React from "react"
import "./Navigation.Module.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Close from "../images/twotone-close-24px.svg"
import Menu from "../images/twotone-menu-24px.svg"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastOffset: 0,
      scrollingUpwards: false,
      toggled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      toggled: !this.state.toggled,
    }))
  }

  handleScroll = () => {
    const { lastOffset } = this.state
    const currentScrollPos = window.pageYOffset
    const scrollingUpwards =
      window.pageYOffset > 0 && lastOffset > currentScrollPos
    this.setState(prevState => ({
      ...prevState,
      lastOffset: currentScrollPos,
      scrollingUpwards: scrollingUpwards,
    }))
  }

  hide = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        toggled: false,
        scrollingUpwards: false,
      }))
    }, 70)
  }

  getClass = () => {
    var value = this.state.toggled ? "toggled-open" : "toggled-closed"
    value += this.state.scrollingUpwards ? " scrollingUpwards" : ""
    return value
  }

  getHamburgerImage = () => {
    return this.state.toggled ? Close : Menu
  }

  render() {
    const { getHamburgerImage, getClass, hide } = this
    return (
      <nav className={getClass()}>
        <div className="hamburger">
          <img
            alt="Menu"
            src={getHamburgerImage()}
            onClick={this.toggle}
            width="32"
            height="32"
          />
        </div>
        <ul>
          <li>
            <a href="#top" onClick={hide} title="Jump to top of page">
              <StaticQuery
                query={graphql`
                  query {
                    file(relativePath: { eq: "gold-monogram.png" }) {
                      childImageSharp {
                        fixed(height: 80, quality: 99) {
                          ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                      }
                    }
                  }
                `}
                render={data => <Img fixed={data.file.childImageSharp.fixed} />}
              />
            </a>
          </li>
          <li className="push-right">
            <a href="#our-day" onClick={hide} title="Jump to Our Day">
              Our day
            </a>
          </li>
          <li>
            <a href="#accomodation" onClick={hide} title="Jump to Accomodation">
              Accomodation
            </a>
          </li>
          <li>
            <a href="#transport" onClick={hide} title="Jump to Transport">
              Transport
            </a>
          </li>
          <li>
            <a href="#gift-list" onClick={hide} title="Jump to Gift List">
              Gift List
            </a>
          </li>
          <li>
            <a href="#photos" onClick={hide} title="Jump to Gift List">
              Photos
            </a>
          </li>
          <li className="button-container">
            <a
              href="https://forms.gle/5BkGPZpdp1tx8wZa8"
              title="Respond to our RSVP"
              target="rsvp"
              className="rsvp-button"
            >
              RSVP
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
