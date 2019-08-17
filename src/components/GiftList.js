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
                  The biggest gift to us is your attendance at our wedding. We
                  don’t expect or need gifts. That being said, to make it easier
                  for those of you who have asked we have set up a gift list
                  with both gifts and contributions to our honeymoon.
                </p>
                <p className="button-container">
                  <a
                    className="gift-list"
                    href="https://www.weddingshop.com/Buy/View/63578"
                    title="Alex and Jess' Gift List"
                    target="giftList"
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
