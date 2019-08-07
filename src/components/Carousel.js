import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Carousel.Module.css"

class Carousel extends React.Component {
  // <img alt="Alex and Jess" src={Wind} />
  // <img alt="Alex and Jess" src={Boat} />
  // <img alt="Alex and Jess" src={Photo} />
  // <img alt="Alex and Jess" src={Booth} />
  // <img alt="Alex and Jess" src={Lounge} />*/}

  render(data) {
    console.info("data: " + JSON.stringify(data))
    console.info("props: " + JSON.stringify(this.props))
    return (
      <section className="slideshow">
        <StaticQuery
          query={graphql`
            query {
              zoom: file(relativePath: { eq: "zoom.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              wind: file(relativePath: { eq: "wind.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              boat: file(relativePath: { eq: "boat.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              photo: file(relativePath: { eq: "photo.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              booth: file(relativePath: { eq: "booth.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              lounge: file(relativePath: { eq: "lounge.jpg" }) {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              title="Header image"
              alt="Greek food laid out on table"
              fluid={data.boat.childImageSharp.fluid}
            />
          )}
        />
      </section>
    )
  }
}

export default Carousel
