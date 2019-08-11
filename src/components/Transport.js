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
                Please arrange your own transport between the church and
                Houghton Lodge Gardens.
              </p>
              <p>
                We will be arranging a bus from Houghton Lodge to Stockbridge at
                the end of the night. Please let us know if you would like a
                seat on the bus at midnight and wish to leave your car.
              </p>
              <p>
                Cars left at Houghton Lodge Gardens need to be collected by
                10.30am on Sunday.
              </p>
              <p>
                We will have a car on call throughout the afternoon should you
                need a lift back to your hotel in Stockbridge for any reason.
                Please ask the Best Men to contact them. Although it is only
                about a mile between Houghton Lodge and Stockbridge, it is not
                safe to walk.
              </p>
              <p>
                If you would like to organise your own taxi, here are some local
                companies:
              </p>
              <div className="taxi-container">
                <div className="taxi">
                  <p>Winchester</p>
                  <p class="strong">Wintax</p>
                  <p>
                    <a href="tel:+441962878727">01962 878727</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Winchester</p>
                  <p class="strong">Wessex Cars</p>
                  <p>
                    <a href="tel:+441962877749">01962 877749</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Andover</p>
                  <p class="strong">A&amp;B Cars</p>
                  <p>
                    <a href="tel:+441264323444">01264 323444</a>
                  </p>
                </div>
                <div className="taxi">
                  <p>Stockbridge</p>
                  <p class="strong">Juddy</p>
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
