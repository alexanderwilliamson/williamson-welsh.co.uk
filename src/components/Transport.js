import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./Transport.Module.css"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "pattern-a.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <BackgroundImage
          id="transport"
          Tag="section"
          className={className}
          fluid={data.desktop.childImageSharp.fluid}
          backgroundColor={`#27363d`}
        >
          <div className="transport-outer">
            <div className="transport-inner">
              <h1>Transport</h1>
              <p>
                Please arrange your own transport between the church and the
                reception venue.
              </p>
              <p>
                Around midnight we will provide a shuttle bus service from
                Houghton Lodge Gardens to Stockbridge. If you would like to
                reserve a seat, please let us know on your R.S.V.P.
              </p>
              <p>
                You are very welcome to leave your car at Houghton Lodge Gardens
                overnight but keep in mind it will need to be collected by
                10.30am on Sunday.
              </p>
              <p>
                The road to Stockbridge is not safe to walk as it is a
                derestricted country lane with no pavements or streetlights.
              </p>
              <p className="strong">
                If you would like to organise your own taxi, here are some local
                companies:
              </p>
              <div className="taxi-container">
                <div className="taxi">
                  <p>Winchester</p>
                  <p className="strong">Wintax</p>
                  <p>
                    <a href="tel:+441962878727">01962 878 727</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Winchester</p>
                  <p className="strong">Wessex Cars</p>
                  <p>
                    <a href="tel:+441962877749">01962 877 749</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Andover</p>
                  <p className="strong">A&amp;B Cars</p>
                  <p>
                    <a href="tel:+441264323444">01264 323 444</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Stockbridge</p>
                  <p className="strong">Juddy</p>
                  <p>
                    <a href="tel:+447950137203">07950 137 203</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
