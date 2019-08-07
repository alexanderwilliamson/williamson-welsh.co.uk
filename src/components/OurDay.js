import React from "react"
import "./OurDay.Module.css"

class OurDay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="our-day">
          <h1>Our Day</h1>
          <p>
            We can’t wait to see you on our wedding day! Here’s some details to
            help you plan.
          </p>
          <p>
            Our day will start at the church in Winchester followed by the
            reception in Stockbridge which is about a 25 minute drive away.
            Please plan to make your own way between the two venues.
          </p>
          <p>
            At both the church and the evening venue there will be uneven ground
            and grass so please bear this in mind when choosing footwear. Our
            evening reception will also be under canvas so please bring warm
            clothing and wet weather gear if needed!
          </p>
          <p>
            We’d also love it if you could please bring along a
            <strong> coconut</strong> to our reception!
          </p>
          <p>If you need to contact anyone on the day please call:</p>
          <ul>
            <li>Simon Welsh (brother of the bride): TODO</li>
            <li>Chris Dove (Usher): TODO</li>
          </ul>
        </section>
        <section>
          <h2>The Church</h2>
          <address>
            <a href="https://goo.gl/maps/RW8k8zF442CTwuYE7" title="Google Maps">
              The Chapel at The Hospital of St.Cross, St.Cross Road, Winchester,
              Hampshire, SO23 9SD
            </a>
          </address>
          <h3>1 o’clock - The ceremony</h3>
          <p>
            Please arrive 15 minutes before the ceremony. There is plenty of
            parking on the field beside the church and this will be signed from
            the main road. It’s worth having brunch/lunch before you arrive as
            the ceremony will be around 1 hour.
          </p>
          <p>
            After the ceremony, please make your own way to the reception venue.
            You will drive through Stockbridge on your way so please feel free
            to stop by your hotel to check in.
          </p>
        </section>
        <section>
          <h2>The Reception</h2>
          <address>
            <a href="https://goo.gl/maps/LSr82yYs8Q6xNMXY7" title="Google Maps">
              Houghton Lodge Gardens, North Houghton, Stockbridge SO20 6LQ
            </a>
          </address>
          <h3>3 o'clock</h3>
          <p>
            After the church ceremony, reception drinks will be served as we
            arrive at Houghton Lodge. There is allocated wedding parking which
            will be signed and is located just beyond the main entrance to
            Houghton Lodge Gardens. Please feel free to leave your car here
            overnight if you’re able to collect it by 10.30am on Sunday.
          </p>
        </section>
        <section>
          <h2>Buses to Stockbridge</h2>
          <h3>12 midnight</h3>
          <address>
            <a href="https://goo.gl/maps/Vf7rGHqQ5t3UQR1i6" title="Google Maps">
              The Greyhound on The Test, 31 High Street, Stockbridge, SO20 6EY
            </a>
          </address>
          <p>
            We will be arranging transport from Houghton Lodge Gardens to The
            Greyhound on the Test for the afterparty. Stockbridge is mainly all
            set back from a highstreet and all suggested accommodation is
            walkable from the drop off point. Please let us know in your RSVP if
            you would like a seat on the bus!
          </p>
        </section>
        <section>
          <h2>Sunday Morning</h2>
          <address>
            <a href="https://goo.gl/maps/Vf7rGHqQ5t3UQR1i6" title="Google Maps">
              The Greyhound on The Test, 31 High Street, Stockbridge, SO20 6EY
            </a>
          </address>
          <h3>Around 10 o’clock - Bacon butties and Bloody Marys</h3>
          <p>
            We’d love you to join us in the Courtyard of The Greyhound on The
            Test before you head off on Sunday morning. We’ll plan to stay
            around until the last people leave!
          </p>
        </section>
      </React.Fragment>
    )
  }
}

export default OurDay
