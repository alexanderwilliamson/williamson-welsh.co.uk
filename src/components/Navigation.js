import React from "react"
import "./Navigation.Module.css"
import Monogram from "../images/monogram.png"
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
          <img
            alt="Menu"
            src={hamburgerImage}
            onClick={this.toggle}
            width="100%"
          />
        </div>
        <ul className={className}>
          <li>
            <a href="#top">
              <img alt="Logo" src={Monogram} height="100%" />
            </a>
          </li>
          <li>
            <a href="#ourday">Our day</a>
          </li>
          <li>
            <a href="#accomodation">Accomodation</a>
          </li>
          <li>
            <a href="#transport">Transport</a>
          </li>
          <li>
            <a href="#giftlist">Gift List</a>
          </li>
          <li>
            <a href="#rsvp">RSVP</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
