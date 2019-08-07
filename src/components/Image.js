import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 700, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    query {
      zoom: file(relativePath: { eq: "zoom.jpg" }) {
        ...servicesImage
      }
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
    }
  `)

  return <Img draggable="false" fluid={data[imageName].childImageSharp.fluid} />
}

export default Image
