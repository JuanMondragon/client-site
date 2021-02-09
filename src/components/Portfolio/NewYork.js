import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../image.css"
import React from 'react'


const NewYork = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: [ "background" "background2" "tetons" "joshuatree"  "arches" "yellowstone" "tetons1" "portAngeles" "yosemite" "yosemite1" "yosemite2" "yosemite3" "yosemite4" "yosemite6" "yosemite7" "pnw" "pnw1" "pnw2" "pnw3" "pnw4" "pnw5" "utah" "utah1" "utah2" "utah3" "utah4" "utah5" "arches" "zion" "headshot" "gatsby-icon" "favicon"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid ( maxHeight: 1000 , maxWidth: 1000 , quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="image-container">
      <h1>New York </h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default NewYork