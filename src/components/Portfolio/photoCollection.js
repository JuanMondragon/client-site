import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../image.css"









const titles={
  1:'yosemite',
  2:'utah',
  3:'Pacific Northwest',

}
const Photos = () => {
  
  
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "yosemite" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
            fluid(maxWidth: 1000, maxHeight: 1000,quality: 100) {
              ...GatsbyImageSharpFluid
              
            }
          }
        }
      }
      pictures: allFile(filter: { relativeDirectory: { eq: "yosemite" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
            fluid(maxWidth: 1000, maxHeight: 1000,quality: 100) {
              ...GatsbyImageSharpFluid
              
            }
          }
        }
      }
      utah: allFile(filter: { relativeDirectory: { eq: "utah" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
            fluid(maxWidth: 1000,maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
              
            }
          }
        }
      }
      pnw: allFile(filter: { relativeDirectory: { eq: "pnw" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
            fluid(maxHeight: 1000, maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image: file(relativePath: { eq: "yosemite1.jpg" }) {
        id
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <>
      
      
     
        <div className="header-style"><h1>{titles[1]}</h1></div>
        
        
        <div className="image-grid">
                {data.images.nodes.map(image => (
                  

                
                   
                <Img
                
                key={image.id}
                className="image-item"
                fluid={image.childImageSharp.fluid}
                 />
                 
                

                ))}

                
                
                
                
              
                 
                  
                 
               
                
                 
                
            
        


    
        
            <div className="header-style"><h1>{titles[2]}</h1></div>
        
        
                {data.utah.nodes.map(utah => (
                <Img
                key={utah.id}
                className="image-item"
                fluid={utah.childImageSharp.fluid}
                />
            ))}
        
    
        
       
        <div className="header-style"><h1>{titles[3]}</h1></div>
        
        
          {data.pnw.nodes.map(pnw => (
            <Img
              key={pnw.id}
              className="image-item"
              fluid={pnw.childImageSharp.fluid}
            />
          ))}
          
      </div>
    
    </>
    
        
      
    
  )
}
export default Photos
