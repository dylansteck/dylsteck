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
    <div style={{position: 'relative', top: '0'}}>
      <h1 style={{float: 'left', fontWeight: 'bold', fontSize: '4em', color: '#333333'}}>Interfaces should be interactive, intuitive, and interesting. I help bring them to life.</h1>
      <Img
        fluid={data.dylanHeadshot.childImageSharp.fluid}
        style={{maxWidth: '40%', float: 'right'}}/>
      </div>
    <img src={logo_background} style={{width: '75%', zIndex: '-1', textAlign: 'center', margin: '0 auto', display: 'block'}} />
    <Portfolio />
  </Layout>
)}

export default IndexPage
