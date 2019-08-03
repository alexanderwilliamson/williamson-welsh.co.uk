import React from "react"

class GiftList extends React.Component {
  render() {
    return (
      <section>
        <h1>Gift List</h1>
        <p>
          Having you at our wedding is the most important thing to us, so please
          don’t feel like you need to get us a gift!
        </p>
        <p>
          If you would like to get us something, we have pulled together a
          selection of gifts and experiences on the link below. As we already
          have a home together there is very little we need and a contribution
          towards our honeymoon would be very much appreciated.
        </p>
        <p>
          <a
            className="rsvp"
            href="http://example.com"
            title="Alex and Jess' Gift List"
          >
            View our gift list
          </a>
        </p>
      </section>
    )
  }
}

export default GiftList
