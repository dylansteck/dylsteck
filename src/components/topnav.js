import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const TopNav = () => {
  const data = useStaticQuery(graphql`
    query {
      logoStyled: file(relativePath: { eq: "DS_Logo_Styled.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
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
      style={{position: 'relative', margin: '5%', gridColumn: 1, objectFit: 'contain'}} className="logo"/>
    <ul style={{listStyleType: 'none', marginRight: '2.5%', gridColumn: 2, textAlign: 'right'}}>
      <Link to="/" style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>Home</Link>
      <Link to="/about" style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>About</Link>
      <Link to="mailto:me@dylansteck.com" style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>Contact</Link>
      <Link to="/#portfolio" style={{display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}>Work</Link>
    </ul>
  </header>
 )
}

export default TopNav
