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
      opened: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  toggle = () => {
    this.setState({
      lastOffset: window.pageYOffset,
      scrollingUpwards: this.state.scrollingUpwards,
      opened: !this.state.opened,
    })
  }

  handleScroll = () => {
    const { lastOffset } = this.state
    const currentScrollPos = window.pageYOffset
    const scrollingUpwards =
      window.pageYOffset > 0 && lastOffset > currentScrollPos
    this.setState({
      lastOffset: currentScrollPos,
      scrollingUpwards: scrollingUpwards,
      opened: this.state.opened,
    })
  }

  hide = () => {
    this.setState({
      lastOffset: window.pageYOffset,
      scrollingUpwards: false,
      opened: false,
    })
  }

  render() {
    const hamburgerImage = this.state.opened ? Close : Menu
    var className = this.state.scrollingUpwards ? "scrollingUpwards" : ""
    className += this.state.opened ? " opened" : ""
    const { hide } = this
    return (
      <nav>
        <div className="hamburger">
          <img alt="Menu" src={hamburgerImage} onClick={this.toggle} />
        </div>
        <ul className={className}>
          <li>
            <a href="#top" onClick={hide} title="Jump to top of page">
              <StaticQuery
                query={graphql`
                  query {
                    file(relativePath: { eq: "gold-monogram.png" }) {
                      childImageSharp {
                        fixed(height: 80, quality: 95) {
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
            <a href="#gift-list" onClick={hide} title="Jump to Gift List">
              Photos
            </a>
          </li>
          <li>
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
