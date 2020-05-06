import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import logo_background from "../images/DS_Background.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <img src={logo_background} style={{width: 85%, zIndex: -1}} />
    <Portfolio />
  </Layout>
)

export default IndexPage
