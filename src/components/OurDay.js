import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
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
                        ...GatsbyImageSharpFluid_tracedSVG
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
            <p>We can’t wait to see you on our wedding day!</p>
            <p>
              Our ceremony and reception are in different places so we have
              pulled together some information to help you make arrangements:
            </p>
            <ul>
              <li>
                There is about a 25 minute drive between the church and the
                reception venue where we will spend the rest of the day.
              </li>
              <li>
                Please plan to make your own way between the two venues. You can
                leave your car overnight at the reception venue and there will
                be transport provided into the local town of Stockbridge at
                midnight.
              </li>
              <li>
                If you have children, you'll want to know that there is a deep
                river next to the marquee with no barrier. There will be family
                children at the wedding and babes in arms are welcome.
              </li>
              <li>
                On the Friday night we will pop into the Grosvenor Hotel in
                Stockbridge for a drink in the bar around 8pm if you are staying
                locally and wanted to say hi!
              </li>
            </ul>
            <h2>What to wear</h2>
            <p className="italic">Summer formal</p>
            <p>
              There is uneven ground and grass at both the church and evening
              venue so please bear this in mind when choosing footwear.
            </p>
            <h2>What to bring</h2>
            <p className="italic">
              We’d love it if you could please bring a coconut with you to the
              reception!
            </p>
            <p>
              Our evening reception will also be under canvas so bring warm
              clothing and wet weather gear if needed.
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
                  past 12 for any early arrivals.
                </p>
                <p>
                  There is plenty of parking on the field beside the church and
                  this will be signposted from the main road. It’s worth having
                  brunch before you arrive as the ceremony will be around 1 hour
                  long.
                </p>
                <p>
                  After the ceremony, please make your own way to the reception
                  venue. You will drive through Stockbridge on the way if you
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
                  we arrive at Houghton Lodge Gardens and we will stay there for
                  the remainder of the day.
                </p>
                <p>
                  There will be allocated wedding parking signposted just beyond
                  the main entrance to Houghton Lodge Gardens.
                </p>
                <p className="strong">
                  You are welcome to leave your car overnight as long as it is
                  collected by 10.30am on Sunday.
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
                  There will be a shuttle bus service to The Greyhound on The
                  Test in Stockbridge from around midnight. If you book to stay
                  in Stockbridge please feel free to make the most of this as
                  you will be able to walk to your accommodation even if you’re
                  not able to keep dancing! Please let us know in your RSVP if
                  you would like to reserve a seat.
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
                  We’d love you to join us in the courtyard of The Greyhound on
                  The Test before you head off on Sunday morning. We’ll plan to
                  stay around until the last people leave!
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
