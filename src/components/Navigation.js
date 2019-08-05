import React from "react"
import "./Navigation.Module.css"
import Monogram from "../images/gold-monogram.png"
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

  render() {
    const hamburgerImage = this.state.opened ? Close : Menu
    var className = this.state.scrollingUpwards ? "scrollingUpwards" : ""
    className += this.state.opened ? " opened" : ""

    return (
      <nav id="top">
        <div className="hamburger">
          <img alt="Menu" src={hamburgerImage} onClick={this.toggle} />
        </div>
        <ul className={className}>
          <li>
            <a href="#top" title="Jump to top of page">
              <img
                className="gold-monogram"
                alt="Logo"
                src={Monogram}
                height="80"
              />
            </a>
          </li>
          <li>
            <a href="#our-day" title="Jump to Our Day">
              Our day
            </a>
          </li>
          <li>
            <a href="#accomodation" title="Jump to Accomodation">
              Accomodation
            </a>
          </li>
          <li>
            <a href="#transport" title="Jump to Transport">
              Transport
            </a>
          </li>
          <li>
            <a href="#gift-list" title="Jump to Gift List">
              Gift List
            </a>
          </li>
          <li>
            <a
              href="https://forms.gle/5BkGPZpdp1tx8wZa8"
              title="Respond to our RSVP"
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
