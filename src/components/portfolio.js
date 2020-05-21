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
      <div style={{position: 'relative', top: '50vh'}}>
        <h1 style={{fontSize: '10vw'}}>Take a look at what I've built: </h1>
        <div className="portfolio-grid">
          {data.gcms.portfolioPieces.map(piece => {
            const { title, subtitle, featureImage, year, linkType, linkRef } = piece
            return (
              <div className="portfolio-piece" style={{width: '45vw', height: '15vh'}}>
                <h3 className="title">{title}</h3>
                <p className="subtitle">{subtitle}</p>
                <small className="year">{year}</small>
                <img className="feature-img" src={featureImage.url} style={{width: '25vw'}}/>
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
