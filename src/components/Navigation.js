import React from "react"
import "./Navigation.Module.css"
import Monogram from "../images/monogram.png"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: window.pageYOffset,
      visible: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { offset } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = window.pageYOffset > 0 && offset > currentScrollPos

    this.setState({
      offset: currentScrollPos,
      visible,
    })
  }

  render() {
    console.log(this.state)
    const className = this.state.visible ? "" : "hidden"

    return (
      <nav className={className}>
        <ul>
          <li>
            <a href="#">
              <img src={Monogram} height="100%" />
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
