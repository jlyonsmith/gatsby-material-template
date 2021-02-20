import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const GatsbyLogo = ({ width = 60 }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt=""
        style={{ width, height: width }}
      />
    )}
  />
)

export default GatsbyLogo
