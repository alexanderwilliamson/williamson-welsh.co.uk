import React from "react"
import "./Photos.Module.css"
import Wedding from "../images/fordi-wedding-animation.gif"

class Photos extends React.Component {
  render() {
    return (
      <section id="photos">
        <h1>Photos</h1>
        <p>
          We have created a Google album for our guests to upload their photos
          of the day. You can access it on the link below.
        </p>
        <p className="button-container">
          <a
            href="https://photos.app.goo.gl/NoFAGyPTaoKUjBwr9"
            title="Alex &amp; Jess' wedding on Google Photos"
            target="googlePhotos"
          >
            Share your photos
          </a>
        </p>
        <p className="strong">
          Please check back here after our wedding and we will add a link to our
          official photos.
        </p>
        <p>
          <img
            src={Wedding}
            alt="Alex &amp; Jess in Wales at Marc and Emmas wedding"
            height="300px"
          />
        </p>
      </section>
    )
  }
}

export default Photos
