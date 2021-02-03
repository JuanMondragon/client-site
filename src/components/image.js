import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"
import {Link} from "gatsby"
import styled from 'styled-components'

const HeadLink=styled(Link)`
cursor: pointer;
text-decoration:none;
font-size: 32px;
color:#000;

`


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background" "background2""headshot" "newyork1" "newyork2" "newyork3" "newyork4" "gatsby-icon" ] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 1000, maxWidth: 1000, quality: 100){
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
      <div className="header-container">
      <HeadLink to="/collection" >Portfolio</HeadLink>
      </div>
      
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

export default Image