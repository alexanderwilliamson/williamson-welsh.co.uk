import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./OurDay.Module.css"

class OurDay extends React.Component {
  render() {
    return (
      <section id="our-day">
        <div className="our-day-flexbox">
          <div className="our-day-flowers">
            <StaticQuery
              query={graphql`
                query {
                  file(relativePath: { eq: "our-day-flowers.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              `}
              render={data => <Img fluid={data.file.childImageSharp.fluid} />}
            />
          </div>
          <div className="our-day-pull-right">
            <h1>Our Day</h1>
            <p>
              We can’t wait to see you on our wedding day! Here are some details
              to help you plan:
            </p>
            <ul>
              <li>
                Our day will start at the church in Winchester followed by the
                reception in Stockbridge which is about a 25 minute drive away.
                Please plan to make your own way between the two venues.
              </li>
              <li>
                If you have children, you will need to know there's a deep river
                next to the marquee with no barrier. There are family children
                at the wedding and babes in arms are welcome, but please keep in
                mind the attention needed if you would like your children with
                you.
              </li>
            </ul>
            <h2>What to wear</h2>
            <p>
              For those of you who are unsure what to wear, our wedding will be
              formal with a tropical twist, so please feel free to wear linen
              suits or maxi dresses.
            </p>
            <p>
              There is uneven ground and grass at both the church and evening
              venue so please bear this in mind when choosing footwear.
            </p>
            <h2>What to bring</h2>
            <p>
              We’d love it if you could please bring a coconut with you to the
              reception!
            </p>
            <p>
              Our evening reception will also be under canvas so please bring
              warm clothing and wet weather gear if needed!
            </p>
          </div>
        </div>
        <hr />
        <div className="timeline">
          <div className="timeline-section">
            <h2>1 o’clock</h2>
            <ul>
              <li>
                <h3>The Church</h3>
                <address>
                  <a
                    href="https://goo.gl/maps/RW8k8zF442CTwuYE7"
                    title="Google Maps"
                    target="theChurch"
                  >
                    The Chapel at The Hospital of St.Cross, St.Cross Road,
                    Winchester, Hampshire, SO23 9SD
                  </a>
                </address>
                <p>
                  Please be seated 15 minutes prior to the ceremony time of 1
                  o’clock. Alex and the best men will be at the church from half
                  past 12 for any early arrivals!
                </p>
                <p>
                  There is plenty of parking on the field beside the church and
                  this will be signposted from the main road. It’s worth having
                  brunch/lunch before you arrive as the ceremony will be around
                  1 hour long.
                </p>
                <p>
                  After the ceremony, please make your own way to the reception
                  venue. You will drive through Stockbridge on your way if you
                  wanted to stop by your accommodation to check in.
                </p>
              </li>
            </ul>
          </div>
          <div className="timeline-section">
            <h2>Followed by</h2>
            <ul>
              <li>
                <h3>The Reception</h3>
                <address>
                  <a
                    href="https://goo.gl/maps/LSr82yYs8Q6xNMXY7"
                    title="Google Maps"
                    target="theReception"
                  >
                    Houghton Lodge Gardens, North Houghton, Stockbridge SO20 6LQ
                  </a>
                </address>
                <p>
                  After the church ceremony, reception drinks will be served as
                  we arrive at Houghton Lodge Gardens and this is where we will
                  stay for the remainder of the day.
                </p>
                <p>
                  There is allocated wedding parking which will be signposted
                  from the main road and is located just beyond the main
                  entrance to Houghton Lodge Gardens. If you would like to leave
                  your car here overnight it will need to be collected by
                  10.30am on Sunday.
                </p>
              </li>
            </ul>
          </div>
          <div className="timeline-section">
            <h2>12 midnight</h2>
            <ul>
              <li>
                <h3>Carriages &amp; the after party</h3>
                <address>
                  <a
                    href="https://goo.gl/maps/Vf7rGHqQ5t3UQR1i6"
                    title="Google Maps"
                    target="carriages"
                  >
                    The Greyhound on The Test, 31 High Street, Stockbridge, SO20
                    6EY
                  </a>
                </address>
                <p>
                  Our last dance will be just before midnight and after this we
                  will be inviting guests to The Greyhound on The Test to
                  continue partying with us until 2am.
                </p>
                <p>
                  There will be a bus which will do a few trips to The Greyhound
                  on The Test from around midnight. If you are staying in
                  Stockbridge please feel free to make the most of this as you
                  will be able to walk to your accommodation even if you’re not
                  able to keep dancing! Please let us know in your RSVP if you
                  would like a seat on the bus!
                </p>
              </li>
            </ul>
          </div>
          <div className="timeline-section">
            <h2>Around 10 o'clock Sunday</h2>
            <ul>
              <li>
                <h3>Bacon butties &amp; Bloody Marys</h3>
                <address>
                  <a
                    href="https://goo.gl/maps/Vf7rGHqQ5t3UQR1i6"
                    title="Google Maps"
                    target="bacon"
                  >
                    The Greyhound on The Test, 31 High Street, Stockbridge, SO20
                    6EY
                  </a>
                </address>
                <p>
                  We’d love you to join us in the Courtyard of The Greyhound on
                  The Test for bacon butties and Bloody Marys before you head
                  off on Sunday morning. We’ll plan to stay around until the
                  last people leave!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default OurDay
