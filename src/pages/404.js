import React from "react"
import NotFound from "../images/404.gif"

class FourOhFour extends React.Component {
  render() {
    return (
      <>
        <p style={{ textAlign: `center` }}>404 Not Found. Looking for this?</p>
        <p style={{ textAlign: `center` }}>
          <img alt="Alex moving a sparking leopard ornament" src={NotFound} />
        </p>
      </>
    )
  }
}

export default FourOhFour
