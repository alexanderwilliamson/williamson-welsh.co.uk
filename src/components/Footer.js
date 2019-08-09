import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Footer.Module.css"

class GiftList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "flowers-12-655.png" }) {
              childImageSharp {
                fluid(maxWidth: 655) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <footer>
            <div className="footer-image">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          </footer>
        )}
      />
    )
  }
}

export default GiftList
