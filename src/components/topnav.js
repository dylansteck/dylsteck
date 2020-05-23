import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TopNav = () => {
  const data = useStaticQuery(graphql`
    query {
      logoStyled: file(relativePath: { eq: "DS_Logo_Styled.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <header style={{display: 'grid', width: '100%', height: '15%', gridTemplateColumns: '10% 90%', position: 'fixed'}}>
    <Img
      fluid={data.logoStyled.childImageSharp.fluid}
      style={{width: '5vw', objectFit: 'cover', margin: '5%', gridColumn: 1}}/>
    <ul style={{listStyleType: 'none', marginRight: '2.5%', gridColumn: 2, textAlign: 'right'}}>
      <li style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>About</li>
      <li style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>Brief</li>
      <li style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>Contact</li>
    </ul>
  </header>
 )
}

export default TopNav
