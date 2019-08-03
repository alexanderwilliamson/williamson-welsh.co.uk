import React from "react"
import Zoom from "../images/zoom.jpg"
import Wind from "../images/wind.jpg"
import Boat from "../images/boat.jpg"
import Photo from "../images/photo.jpg"
import Booth from "../images/booth.jpg"
import Lounge from "../images/lounge.jpg"
import "./Carousel.Module.css"

class Carousel extends React.Component {
  render() {
    return (
      <div className="slideshow">
        <img alt="Alex and Jess" src={Zoom} />
      </div>
    )

    return (
      <div className="slideshow">
        <img alt="Alex and Jess" src={Zoom} />
        <img alt="Alex and Jess" src={Wind} />
        <img alt="Alex and Jess" src={Boat} />
        <img alt="Alex and Jess" src={Photo} />
        <img alt="Alex and Jess" src={Booth} />
        <img alt="Alex and Jess" src={Lounge} />
      </div>
    )
  }
}

export default Carousel
