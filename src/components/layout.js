/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SocialIcons from "./socialicons"
import TopNav from "./topnav";
import Contact from "../components/contact"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TopNav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 10% 0 10%`
        }}
      >
        {/*<SocialIcons/>*/}
        <main>{children}</main>
        <Contact />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
