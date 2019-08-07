import React from "react"
import "./Transport.Module.css"

class Accomodation extends React.Component {
  render() {
    return (
      <section id="transport">
        <div className="transport-outer">
          <div className="transport-inner">
            <h1>Transport</h1>
            <p>
              Please arrange your fown transport between the church and Houghton
              Lodge Gardens.
            </p>
            <p>
              We will be arranging a bus from Houghton Lodge to Stockbridge at
              the end of the night. Please let us know if you would like a seat
              on the bus and wish to leave your car at Houghton Lodge Gardens
              overnight to be collected by 10.30am on Sunday.
            </p>
            <p>
              We will have a car on call throughout the afternoon should you
              need a lift back to your hotel in Stockbridge for any reason.
              Please ask the Best Men to contact them. Although it is only about
              a mile between Houghton Lodge and Stockbridge, it is not safe to
              walk.
            </p>
            <p>
              If you would like to organise your own taxi, here are some local
              companies:
            </p>
            <ul>
              <li>
                Winchester - Wintax:{" "}
                <a href="tel:+441962878727">01962 878 727</a>
              </li>
              <li>
                Winchester - Wessex cars:{" "}
                <a href="tel:+441962877749">01962 877 749</a>
              </li>
              <li>Romsey - Abbey cars: </li>
              <li>Andover - A&amp;B cars:</li>
              <li>Stockbridge - Juddy: 07950 137 203</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Accomodation
