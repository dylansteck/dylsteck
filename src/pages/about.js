import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import logo_background from "../images/DS_Background.svg"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      dylanHeadshotAlt: file(relativePath: { eq: "DS_Headshot_Alt.jpeg" }) {
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
    <SEO title="About" />
    <div style={{position: 'relative', top: '5vh'}}>
      <img src={logo_background} style={{width: '75%', zIndex: -1, textAlign: 'center', margin: '0 auto', display: 'block', top: '2.5vh', position: 'sticky'}} />
      <div style={{position: 'absolute', top: '5vh'}}>
        <h4 style={{float: 'left', fontWeight: 'bold', fontSize: '2.5em', color: '#221F20', zIndex: 1}}>
        I'm a seventeen year old interface designer and developer from New York City with 7+ years of coding experience.
        I've built everything from iPhone apps to desktop apps to event posters.
        Currently, I'm building new information systems for the internet with my startup, Stecknologies. I'm also available for select freelance work.
        </h4>
        <Img
          fluid={data.dylanHeadshotAlt.childImageSharp.fluid}
          style={{width: '25vw', float: 'right', marginRight: '15%', position: 'relative'}}/>
      </div>
    </div>
  </Layout>
)
}

export default About
