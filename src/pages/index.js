import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import PhotoSection from "../components/PhotoSection"


import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <PhotoSection />
    <Image  />
   
  </Layout>
)

export default IndexPage
