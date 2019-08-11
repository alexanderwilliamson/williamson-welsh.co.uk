import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Footer.Module.css"

class Footer extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "footer.png" }) {
              childImageSharp {
                fluid(maxWidth: 655, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

export default Footer
