import React from "react"
import Navigation from "./Navigation"
import Carousel from "./Carousel"
import OurDay from "./OurDay"
import Accomodation from "./Accomodation"
import Transport from "./Transport"
import GiftList from "./GiftList"
import Hero from "./Hero"
import "../../static/normalize.css"
import "./App.Module.css"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Hero />
        <Carousel />
        <OurDay />
        <Accomodation />
        <Transport />
        <GiftList />
      </React.Fragment>
    )
  }
}

export default App
