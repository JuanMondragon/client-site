import React from "react"


import Layout from "../components/layout"
import Portfolio from "../components/Portfolio"

import SEO from "../components/seo"
import "../components/image.css"


const Collection = () => (
  <Layout>
    <SEO title="Portfolio" />
    
   
   <Portfolio  />
  </Layout>
)

export default Collection