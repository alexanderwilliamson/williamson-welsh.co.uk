import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/App"

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Alex &amp; Jess' Wedding 4th July 2020</title>
          <meta
            name="description"
            content="Alex &amp; Jess' Wedding 4th July 2020"
          />
          <meta name="author" content="Alexander Williamson" />
        </Helmet>
        <App />
      </React.Fragment>
    )
  }
}

export default Index
