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
                reception venue.
              </p>
              <p>
                We will be providing a bus from Houghton Lodge Gardens to
                Stockbridge at midnight. There is a section on our RSVP to let
                us know if you would like to reserve a seat.
              </p>
              <p>
                You’re very welcome to leave your car at the venue overnight but
                please keep in mind it will need to be collected by 10.30am on
                Sunday.
              </p>
              <p>
                We will have a car on call throughout the afternoon and evening
                if you are drinking and need a lift back Stockbridge for any
                reason. The Ushers will be oraganising this and their contact
                details will be on the order of service.
              </p>
              <p>
                The road between Houghton Lodge and Stockbridge is not safe to
                walk as it is a de-restricted narrow country lane with no
                pavements.
              </p>
              <p>
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
