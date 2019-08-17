import React from "react"
import "./Photos.Module.css"

class Photos extends React.Component {
  render() {
    return (
      <section id="photos">
        <h1>Photos</h1>
        <p>
          We’ve created a Google album for our guests to upload their photos of
          the day, You can access it using the link below.
        </p>
        <p class="button-container">
          <a
            href="https://photos.app.goo.gl/NoFAGyPTaoKUjBwr9"
            title="Alex &amp; Jess' wedding on Google Photos"
            target="googlePhotos"
          >
            Share your photos
          </a>
        </p>
        <p>
          Please check back here after our wedding and we will add a link to our
          official photos.
        </p>
      </section>
    )
  }
}

export default Photos
