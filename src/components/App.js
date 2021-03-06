import React from "react"
import Navigation from "./Navigation"
import Carousel from "./Carousel"
import OurDay from "./OurDay"
import Accomodation from "./Accomodation"
import Transport from "./Transport"
import GiftList from "./GiftList"
import Hero from "./Hero"
import Photos from "./Photos"
import Footer from "./Footer"
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
        <Transport />
        <Accomodation />
        <GiftList />
        <Photos />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
