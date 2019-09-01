import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Up from "../images/baseline-arrow_upward-24px.svg"
import "./Footer.Module.css"

class Footer extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            footer: file(relativePath: { eq: "footer.png" }) {
              childImageSharp {
                fluid(maxWidth: 655, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <footer>
            <p>
              <a href="#top">
                <img src={Up} width="40" alt="Upwards facing arrow" />
              </a>
              <br />
              <a href="#top">Back to top</a>
            </p>

            <p>&copy; Jess Welsh &amp; Alexander Williamson</p>
            <div className="footer-image">
              <Img fluid={data.footer.childImageSharp.fluid} />
            </div>
          </footer>
        )}
      />
    )
  }
}

export default Footer
