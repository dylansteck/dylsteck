import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {FaTwitter, FaLinkedin, FaMediumM, FaGithubAlt} from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logoStyled: file(relativePath: { eq: "DS_Logo_Styled.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <header
    class="ayo"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: '2.5%'
      }}
    >
    <Img
      fluid={data.logoStyled.childImageSharp.fluid}
      style={{maxWidth: '5%'}}/>
      <ul style={{listStyleType: 'none', margin: '7.5% -2.5%', maxWidth: '5%',  "& li": {display: 'block', marginBottom: '2.5%', color: '#333333'}}}>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
        <li><FaMediumM /></li>
        <li><FaGithubAlt /></li>
      </ul>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
