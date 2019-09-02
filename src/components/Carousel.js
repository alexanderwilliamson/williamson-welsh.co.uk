import React from "react"
import Image from "./Image.js"
import Pause from "../images/outline-pause-24px.svg"
import Playing from "../images/outline-play_arrow-24px.svg"
import "./Carousel.Module.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      "photo",
      "ring",
      "lounge",
      "booth",
      "champagne",
      "airport",
      "wind",
      "boat",
    ]
    this.state = {
      playing: true,
      imageName: this.images[0],
      duration: 5000,
    }
  }

  handleTimeout = () => {
    if (this.state.playing === true) {
      this.next()
    }
    setTimeout(() => {
      this.handleTimeout()
    }, this.state.duration)
  }

  toggleSlideshow = () => {
    this.setState(prevState => ({
      ...prevState,
      playing: !this.state.playing,
    }))
  }

  componentDidMount() {
    setTimeout(() => {
      this.handleTimeout()
    }, this.state.duration)
  }

  getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  next = () => {
    var currentIndex = this.images.indexOf(this.state.imageName)
    var nextIndex = currentIndex < this.images.length - 1 ? currentIndex + 1 : 0
    this.setState(prevState => ({
      ...prevState,
      imageName: this.images[nextIndex],
    }))
  }

  change = name => {
    var nextIndex = this.images.indexOf(name)
    this.setState(prevState => ({
      ...prevState,
      playing: false,
      imageName: this.images[nextIndex],
    }))
  }

  render() {
    const { imageName, playing } = this.state
    const { change, images, toggleSlideshow } = this
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
    const slideshowButtonImage = playing ? Pause : Playing
    return (
      <section>
        <div className="slideshow">
          <div className="slideshow-main-image">
            <div className="slideshow-controls">
              <button onClick={toggleSlideshow} aria-label="Toggle Slideshow">
                <img
                  src={slideshowButtonImage}
                  alt={playing ? "Pause slideshow" : "Play slideshow"}
                />
              </button>
            </div>
            <Image
              onClick={this.next}
              imageName={imageName}
              draggable={false}
              fluidOrFixed="fluid"
            />
          </div>
          <div className="slideshow-thumbnails">{items}</div>
        </div>
      </section>
    )
  }
}

export default Carousel
