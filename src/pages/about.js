import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import logo_background from "../images/DS_Background.svg"
import Img from "gatsby-image"

const About = () => {
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
    <SEO title="About" />
    <div style={{position: 'relative', top: '5vh'}}>
      <img src={logo_background} style={{width: '75%', zIndex: -1, textAlign: 'center', margin: '0 auto', display: 'block', top: '2.5vh', position: 'sticky'}} />
      <div style={{position: 'absolute', top: '5vh'}}>
        <h4 style={{float: 'left', fontWeight: 'bold', fontSize: '2.5em', color: '#221F20', zIndex: 1}}>
        I'm an interface designer and developer from New York City with 9+ years of coding experience.
        I've built and designed everything from iPhone apps to desktop apps to brand strategies to event posters.
        Currently, I'm building <a href="http://bit.ly/cortexgraph">Cortex</a>, a tool that helps us contextualize and supercharge our searches. I'm also available for select freelance work.
        </h4>
        <Img
          fluid={data.dylanHeadshot.childImageSharp.fluid}
          style={{width: '25vw', float: 'right', marginRight: '15%', position: 'relative'}}/>
      </div>
    </div>
  </Layout>
)
}

export default About
