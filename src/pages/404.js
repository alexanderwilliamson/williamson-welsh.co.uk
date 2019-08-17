import React from "react"
import NotFound from "../images/404.gif"

class FourOhFour extends React.Component {
  render() {
    const beans = {
      color: "red",
    }
    return (
      <>
        <p style={{ textAlign: `center` }}>404 Not Found. Looking for this?</p>
        <p style={{ textAlign: `center` }}>
          <img src={NotFound} />
        </p>
      </>
    )
  }
}

export default FourOhFour
