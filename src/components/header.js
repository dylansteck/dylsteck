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
  <header>
    <div
      style={{
        margin: '2.5%'
      }}
    >
    <Img
      fluid={data.logoStyled.childImageSharp.fluid}
      style={{maxWidth: '5%'}}/>
      <ul style={{listStyleType: 'none', margin: '10% -2.5%', marginBottom: '0', maxWidth: '5%'}}>
        <li className="fawesome"><FaTwitter /></li>
        <li className="fawesome"><FaLinkedin /></li>
        <li className="fawesome"><FaMediumM /></li>
        <li className="fawesome"><FaGithubAlt /></li>
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
