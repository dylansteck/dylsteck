import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import logo_background from "../images/DS_Background.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      dylanHeadshot: file(relativePath: { eq: "DS_Headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <Layout>
    <SEO title="Home"/>
    <div style={{position: 'relative', top: '5vh'}}>
      <img src={logo_background} style={{width: '75%', zIndex: -1, textAlign: 'center', margin: '0 auto', display: 'block', top: '2.5vh', position: 'sticky'}} />
      <div style={{position: 'absolute', top: '5vh'}}>
        <h1 style={{float: 'left', fontWeight: 'bold', fontSize: '4em', color: '#333333', zIndex: 1}}>Interfaces should be interactive, intuitive, and interesting. I help bring them to life.</h1>
        <Img
          fluid={data.dylanHeadshot.childImageSharp.fluid}
          style={{width: '25vw', float: 'right', marginRight: '15%', position: 'relative'}}/>
      </div>
    </div>
    <Portfolio />
  </Layout>
)}

export default IndexPage
