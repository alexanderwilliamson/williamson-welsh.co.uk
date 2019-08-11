import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./GiftList.Module.css"

class GiftList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "gift-list-flowers.png" }) {
              childImageSharp {
                fixed(height: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <section id="gift-list">
            <div className="gift-list-outer">
              <div className="gift-list-inner">
                <div className="gift-list-flowers">
                  <Img fixed={data.file.childImageSharp.fixed} />
                </div>{" "}
                <h1>Gift List</h1>
                <p>
                  Having you at our wedding is the most important thing to us,
                  so please don’t feel like you need to get us a gift!
                </p>
                <p>
                  If you would like to get us something, we have pulled together
                  a selection of gifts and experiences on the link below. As we
                  already have a home together there is very little we need so a
                  contribution towards our honeymoon would be very much
                  appreciated.
                </p>
                <p className="button-container">
                  <a
                    className="gift-list"
                    href="https://www.weddingshop.com/Buy/View/63578"
                    title="Alex and Jess' Gift List"
                    target="gift-list"
                  >
                    View our gift list
                  </a>
                </p>
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export default GiftList
