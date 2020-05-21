import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {FaTwitter, FaLinkedin, FaMediumM, FaGithubAlt} from "react-icons/fa"

const SocialIcons = () => {
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
    <div
      style={{
        marginLeft: '5%',
        marginTop: '5%',
        flex: 1,
        flexBasis: '5%'
      }}
    >
    <ul>
        <li className="fawesome"><FaTwitter /></li>
        <li className="fawesome"><FaLinkedin /></li>
        <li className="fawesome"><FaMediumM /></li>
        <li className="fawesome"><FaGithubAlt /></li>
      </ul>
    </div>
)}

export default SocialIcons
