import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Accomodation.Module.css"

class Accomodation extends React.Component {
  render() {
    return (
      <section id="accomodation">
        <div className="accomodation-flexbox">
          <div className="accomodation-content">
            <h1>Accommodation</h1>
            <p>
              There are numerous options in and around Stockbridge and
              Winchester. We have reserved all rooms in{" "}
              <a href="http://thegreyhoundonthetest.co.uk">
                The Greyhound on The Test
              </a>{" "}
              and{" "}
              <a href="https://g.page/GrosvenorHotelStockbridge?share">
                The Grosvenor Hotel
              </a>{" "}
              in Stockbridge on Friday and Saturday night. If you would like to
              book a room here for one or both nights, please call Hayley at The
              Greyhound on: 01264 810833
            </p>
            <p>
              The weekend of our wedding is also{" "}
              <a href="https://hatfair.co.uk">Winchester Hat Fair</a> so the
              city will be busy and accommodation will get booked up quickly. If
              you want to stay in Winchester on Friday night there will be an
              amazing atmosphere with music and street performers!
            </p>
          </div>
          <div className="accomodation-flowers">
            <StaticQuery
              query={graphql`
                query {
                  file(relativePath: { eq: "accomodation-flowers.png" }) {
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
        </div>
        <hr />
        <h2>Winchester</h2>
        <div className="hotel">
          <h3>
            <a href="https://www.travelodge.co.uk/hotels/660/Winchester-hotel">
              Travelodge
            </a>
          </h3>
          <p>From &pound;30 per night</p>
          <p>
            This opened in summer 2019 and is on the high street so it’s a good
            base to explore the city. Please note it does not have parking so
            you will have to pay for a local pay and display car park (free
            between 6pm - 8am).
          </p>
          <ul>
            <li>1.9 miles from the church</li>
            <li>11.4 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="https://www.accorhotels.com/gb/hotel-6619-mercure-winchester-wessex-hotel/index.shtml">
              The Wessex Hotel (Mercure)
            </a>
          </h3>
          <p>From &pound;80 per night</p>
          <p>
            This is just behind the Travelodge, right next to the Cathedral and
            is another option if you want to be in the center of the city. It
            has parking which you will need to pay for.
          </p>
          <ul>
            <li>1.9 miles from the church</li>
            <li>11.4 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="https://www.winchesterroyalhotel.com">
              The Winchester Royal Hotel
            </a>
          </h3>
          <p>From &pound;140 per night</p>
          <p>
            This is a little more upmarket but quite dated. It is at the top of
            the high street and is a central option with parking.
          </p>
          <ul>
            <li>2.1 miles from the church</li>
            <li>11.7 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="https://www.thewinchesterhotel.co.uk">
              The Winchester Hotel and Spa
            </a>
          </h3>
          <p>From &pound;150 per night</p>
          <p>
            This is near the train station on the outskirts of town. It has
            ample parking and will take you about 15 minutes to walk into the
            city centre from here.
          </p>
          <ul>
            <li>2.3 miles from the church</li>
            <li>11 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="https://www.premierinn.com/gb/en/hotels/england/hampshire/winchester/winchester.html">
              Premier Inn
            </a>
          </h3>
          <p>From &pound;60 per night</p>
          <p>
            This has been open a few years and has good reviews! It’s on the
            outskirts of town with free parking. It will take you about 20
            minutes to walk into the city centre.
          </p>
          <ul>
            <li>2.3 miles from the church</li>
            <li>14.1 miles from the reception venue</li>
          </ul>
        </div>
        <p class="strong">
          There is also a Hotel du Vin and some great pubs with rooms (Number 5
          Bridge Street, The Black Hole, The Westgate, the Wykeham Arms) if you
          are after something a little more individual!
        </p>
        <hr />
        <h2>Stockbridge</h2>
        <p>
          Stockbridge accommodation consists of mainly of pubs with rooms, but
          there are also lots of B&amp;B’s that we haven’t listed. Anything
          along the high street will be walkable from The Greyhound on the Test
          if you are making the most of our bus at the end of the night!
        </p>
        <p>
          The road between Houghton Lodge Gardens and Stockbridge is not safe to
          walk, so please either book a seat on our bus or arrange a taxi.
        </p>
        <div className="hotel">
          <h3>
            <a href="http://thegreyhoundonthetest.co.uk?the-grosvenor-hotel">
              The Grosvenor Hotel
            </a>
          </h3>
          <p>From &pound;100 per night (28 rooms)</p>
          <p>
            This has just been completely renovated and all the rooms have been
            reserved for our guests. It is a 2 minute walk from The Greyhound on
            The Test and has free parking.
          </p>
          <p>To book, please call Hayley on 01264 810833</p>
          <ul>
            <li>10.7 miles from the church</li>
            <li>1.7 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="http://www.whitehartstockbridge.co.uk">
              The White Hart Inn
            </a>
          </h3>
          <p>From &pound;100 per night (14 rooms)</p>
          <p>
            This is a nice modern pub with quality fitted bedrooms and free
            parking. It is the opposite end of the high street from The
            Greyhound on The Test and is about a 10 minute walk.
          </p>
          <ul>
            <li>10.6 miles from the church</li>
            <li>1.6 miles from the reception venue</li>
          </ul>
        </div>
        <div className="hotel">
          <h3>
            <a href="http://www.the3cups.co.uk">The Three Cups</a>
          </h3>
          <p>From &pound;100 per night (14 rooms)</p>
          <p>
            This pub is opposite The Greyhound on the Test and is a little older
            but a charming option.
          </p>
          <ul>
            <li>2.3 miles from the church</li>
            <li>14.1 miles from the reception venue</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Accomodation
