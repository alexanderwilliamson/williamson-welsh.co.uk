import React from "react"
import Image from "./Image.js"
import "./Carousel.Module.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      "photo",
      "zoom",
      "boat",
      "lounge",
      "booth",
      "champagne",
      "beauty",
      "airport",
    ]
    this.state = {
      imageName: this.images[0],
    }
  }

  componentDidMount() {
    this.next()
  }

  getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  next = () => {
    var currentIndex = this.images.indexOf(this.state.imageName)
    var nextIndex = currentIndex < this.images.length - 1 ? currentIndex + 1 : 0
    this.setState({
      imageName: this.images[nextIndex],
    })
  }

  change = name => {
    var nextIndex = this.images.indexOf(name)
    this.setState({
      imageName: this.images[nextIndex],
    })
  }

  render() {
    console.info("render")
    const { imageName } = this.state
    const { change, images } = this
    const items = images.map(function(item, key) {
      var className = "thumbnail-image"
      className += imageName === item ? " thumbnail-active" : ""
      return (
        <div key={key} className={className} onClick={() => change(item)}>
          <Image
            imageName={item}
            height="30"
            width="30"
            draggable={false}
            fluidOrFixed="fluid"
          />
        </div>
      )
    })
    return (
      <section className="slideshow">
        <div onClick={this.next}>
          <Image imageName={imageName} draggable={false} fluidOrFixed="fluid" />
        </div>
        <div className="thumbnail-buttons">{items}</div>
      </section>
    )
  }
}

export default Carousel
