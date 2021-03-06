import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import "./Accomodation.Module.css"

class Accomodation extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          fragment cardSettings on File {
            childImageSharp {
              fluid(maxWidth: 700, quality: 95, cropFocus: SOUTH) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          query {
            flowers: file(relativePath: { eq: "accomodation-flowers.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            church: file(relativePath: { eq: "church.png" }) {
              childImageSharp {
                fixed(quality: 90, width: 30) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            cocktails: file(relativePath: { eq: "cocktails.png" }) {
              childImageSharp {
                fixed(quality: 90, width: 30) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            travelodge: file(relativePath: { eq: "travelodge.jpg" }) {
              ...cardSettings
            }
            wessex: file(relativePath: { eq: "wessex.jpg" }) {
              ...cardSettings
            }
            winchesterRoyal: file(
              relativePath: { eq: "winchester-royal.jpg" }
            ) {
              ...cardSettings
            }
            winchesterHotelAndSpa: file(
              relativePath: { eq: "winchester-hotel-and-spa.jpg" }
            ) {
              ...cardSettings
            }
            premierInn: file(relativePath: { eq: "premier-inn.jpg" }) {
              ...cardSettings
            }
            grosvenor: file(relativePath: { eq: "the-grosvenor.jpg" }) {
              ...cardSettings
            }
            whiteHart: file(relativePath: { eq: "white-hart.jpg" }) {
              ...cardSettings
            }
            threeCups: file(relativePath: { eq: "three-cups.jpg" }) {
              ...cardSettings
            }
          }
        `}
        render={data => (
          <section id="accomodation">
            <div className="accomodation-flexbox">
              <div className="accomodation-content">
                <h1>Accommodation</h1>
                <p>
                  There are numerous options in and around Stockbridge and
                  Winchester. The bridal party will be staying at{" "}
                  <a
                    href="http://thegreyhoundonthetest.co.uk"
                    target="greyhound"
                  >
                    The Greyhound on The Test
                  </a>{" "}
                  in Stockbridge and we have reserved all the rooms for both
                  Friday and Saturday night at{" "}
                  <a
                    href="https://www.thegrosvenorstockbridge.com"
                    target="grosvenor"
                  >
                    The Grosvenor Hotel
                  </a>{" "}
                  which is just down the road.
                </p>
                <p className="strong">
                  If you would like to book a room at The Grosvenor Hotel please
                  call Hayley at The Greyhound on:{" "}
                  <a target="phone" href="tel:+441264810833">
                    01264 810 833
                  </a>
                </p>
                <p>
                  The weekend of our wedding will also be the{" "}
                  <a href="https://hatfair.co.uk" title="hatFair">
                    Winchester Hat Fair
                  </a>
                  , so the city will be busy and accommodation will get booked
                  up quickly. If you are planning on making a weekend of it and
                  want to stay in Winchester on Friday night, there will be an
                  amazing atmosphere with music and street performers!
                </p>
              </div>
              <div className="accomodation-flowers">
                <Img fluid={data.flowers.childImageSharp.fluid} />
              </div>
            </div>
            <hr />
            <h2>Winchester</h2>
            <p>
              If you want to stay the Friday night and would like to experience
              Winchester Hat Fair, here are some accommodation options. Being in
              Winchester will also mean you are closer to the church for the
              ceremony on Saturday.
            </p>
            <div className="cards">
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    target="travelodge"
                    href="https://www.travelodge.co.uk/hotels/660/Winchester-hotel"
                  >
                    <Img fluid={data.travelodge.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      target="travelodge"
                      href="https://www.travelodge.co.uk/hotels/660/Winchester-hotel"
                    >
                      Travelodge
                    </a>
                  </h3>
                  <p className="price">From &pound;30 per night</p>
                  <p>
                    Winchester Travelodge opened in summer 2019 and is on the
                    high street so it’s a good base to explore the city. Please
                    note it does not have parking so you will have to pay for a
                    local pay and display car park (free between 6pm - 8am).
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      1.9 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      11.4 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    target="wessex"
                    href="https://www.accorhotels.com/gb/hotel-6619-mercure-winchester-wessex-hotel/index.shtml"
                  >
                    <Img fluid={data.wessex.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      target="wessex"
                      href="https://www.accorhotels.com/gb/hotel-6619-mercure-winchester-wessex-hotel/index.shtml"
                    >
                      The Wessex Hotel (Mercure)
                    </a>
                  </h3>
                  <p className="price">From &pound;80 per night</p>
                  <p>
                    The Wessex Hotel is just behind the Travelodge, right next
                    to the Cathedral and is another option if you want to be in
                    the center of the city. It has parking which you will need
                    to pay for.
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      1.9 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      11.4 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    href="https://www.winchesterroyalhotel.com"
                    target="winchesterRoyal"
                  >
                    <Img fluid={data.winchesterRoyal.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      href="https://www.winchesterroyalhotel.com"
                      target="winchesterRoyal"
                    >
                      The Winchester Royal Hotel
                    </a>
                  </h3>
                  <p className="price">From &pound;140 per night</p>
                  <p>
                    The Winchester Royal Hotel is a more traditional hotel. It
                    is at the top of the high street and is a central option
                    with parking.{" "}
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      2.1 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      11.7 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    href="https://www.thewinchesterhotel.co.uk"
                    target="winchesterHotelAndSpa"
                  >
                    <Img
                      fluid={data.winchesterHotelAndSpa.childImageSharp.fluid}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      href="https://www.thewinchesterhotel.co.uk"
                      target="winchesterHotelAndSpa"
                    >
                      The Winchester Hotel and Spa
                    </a>
                  </h3>
                  <p className="price">From &pound;150 per night</p>
                  <p>
                    The Winchester Hotel and Spa is near the train station on
                    the outskirts of the city. It has ample parking and will
                    take you about 15 minutes to walk into the city center from
                    here.
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      2.3 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      11 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    target="premier"
                    href="https://www.premierinn.com/gb/en/hotels/england/hampshire/winchester/winchester.html"
                  >
                    <Img fluid={data.premierInn.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      target="premier"
                      href="https://www.premierinn.com/gb/en/hotels/england/hampshire/winchester/winchester.html"
                    >
                      Premier Inn
                    </a>
                  </h3>
                  <p className="price">From &pound;60 per night</p>
                  <p>
                    The Premier Inn has been open a few years and we have heard
                    good things! It’s on the outskirts of Winchester with free
                    parking. It will take you about 20 minutes to walk into the
                    city centre.
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      2.3 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      14.1 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card extra-information">
                <div className="card-content">
                  <h3>Other options</h3>
                  <p>
                    There is also a{" "}
                    <a
                      href="https://www.hotelduvin.com/locations/winchester"
                      title="Hotel du Vin Winchester"
                      target="hotelDuVinWinchester"
                    >
                      Hotel du Vin
                    </a>{" "}
                    and some great pubs with rooms if you are after something a
                    little more individual! Here are a few of our favourites:
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.bridgestreethouse.co.uk"
                        title="Number 5 Bridge Street"
                        target="number5"
                      >
                        Number 5 Bridge Street
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.theblackholebb.co.uk"
                        title="The Black Hole"
                        target="theBlackHole"
                      >
                        The Black Hole
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.westgatewinchester.com/rooms"
                        target="theWestgate"
                        title="The Westgate Hotel"
                      >
                        The Westgate
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wykehamarmswinchester.co.uk"
                        title="The Wykeham Arms Hotel"
                        target="theWykehamArmsHotel"
                      >
                        The Wykeham Arms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <h2>Stockbridge</h2>
            <p>
              Stockbridge accommodation consists of mainly pubs with rooms, but
              there are also lots of B&amp;Bs that we haven’t listed. Anything
              along the high street will be walkable from The Greyhound on the
              Test if you are joining us for the after party or making the most
              of our shuttle bus at the end of the night.
            </p>
            <div className="cards">
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    target="grosvenor"
                    href="https://www.thegrosvenorstockbridge.com"
                  >
                    <Img fluid={data.grosvenor.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      target="grosvenor"
                      href="https://www.thegrosvenorstockbridge.com"
                    >
                      The Grosvenor Hotel
                    </a>
                  </h3>
                  <p className="price">From &pound;100 per night (28 rooms)</p>
                  <p>
                    We have reserved all of the rooms at The Grosvenor Hotel on
                    both Friday and Saturday night. The entire hotel has been
                    recently renovated and it is a 2 minute walk from The
                    Greyhound on The Test. It also has free parking. We will pop
                    into the Grosvenor hotel for a drink on Friday evening
                    before retiring for the night.
                  </p>
                  <p className="strong">
                    To book, please call Hayley on{" "}
                    <a target="phone" href="tel:+441264810833">
                      01264 810833
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      10.7 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      1.7 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a
                    target="whiteHart"
                    href="http://www.whitehartstockbridge.co.uk"
                  >
                    <Img fluid={data.whiteHart.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a
                      target="whiteHart"
                      href="http://www.whitehartstockbridge.co.uk"
                    >
                      The White Hart Inn
                    </a>
                  </h3>
                  <p className="price">From &pound;100 per night (14 rooms)</p>
                  <p>
                    The White Hart Inn is a quality modern pub with free
                    parking. It is the opposite end of the high street from The
                    Greyhound on The Test but only about a 7 minute walk.
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      10.6 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      1.6 miles
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card hotel">
                <div className="card-hero">
                  <a target="threeCups" href="http://www.the3cups.co.uk">
                    <Img fluid={data.threeCups.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="card-content">
                  <h3>
                    <a target="threeCups" href="http://www.the3cups.co.uk">
                      The Three Cups
                    </a>
                  </h3>
                  <p className="price">From &pound;100 per night (8 rooms)</p>
                  <p>
                    The Three Cups is the pub opposite The Greyhound on the
                    Test. It is a little older but a charming option.
                  </p>
                </div>
                <div className="card-footer">
                  <ul>
                    <li className="church">
                      <span className="icon">
                        <Img fixed={data.church.childImageSharp.fixed} />
                      </span>{" "}
                      10.8 miles
                    </li>
                    <li>
                      <span className="icon">
                        <Img fixed={data.cocktails.childImageSharp.fixed} />
                      </span>{" "}
                      1.6 miles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export default Accomodation
