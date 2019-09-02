import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Image = ({ imageName, fluidOrFixed }) => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 1100, cropFocus: CENTER, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    query {
      wind: file(relativePath: { eq: "wind.jpg" }) {
        ...servicesImage
      }
      boat: file(relativePath: { eq: "boat.jpg" }) {
        ...servicesImage
      }
      photo: file(relativePath: { eq: "photo.jpg" }) {
        ...servicesImage
      }
      booth: file(relativePath: { eq: "booth.jpg" }) {
        ...servicesImage
      }
      lounge: file(relativePath: { eq: "lounge.jpg" }) {
        ...servicesImage
      }
      airport: file(relativePath: { eq: "airport.jpg" }) {
        ...servicesImage
      }
      champagne: file(relativePath: { eq: "champagne.jpg" }) {
        ...servicesImage
      }
      ring: file(relativePath: { eq: "ring.jpg" }) {
        ...servicesImage
      }
    }
  `)

  return <Img fluid={data[imageName].childImageSharp.fluid} />
}

export default Image
