import React from "react"
import { StaticQuery } from "gatsby"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          portfolioPieces {
            title
            subtitle
            featureImage {
              url
            }
            year
            linkType
            linkRef
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Here's what I've worked on:</h1>
        <div className="portfolio-grid">
          {data.gcms.portfolioPieces.map(piece => {
            const { title, subtitle, featureImage, year, linkType, linkRef } = piece
            return (
              <div className="portfolio-piece">
                <h3 className="title">{title}</h3>
                <p className="subtitle">{subtitle}</p>
                <small className="year">{year}</small>
                <img className="feature-img" src={featureImage.url}/>
                <a href={linkRef} className="link">{linkType}</a>
              </div>
            )
          })}
        </div>
      </div>
    )}
  />
)

export default Portfolio
