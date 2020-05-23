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
        <h1 style={{fontSize: '5vw'}}>Take a look at what I've built: </h1>
        <div className="portfolio-grid">
          {data.gcms.portfolioPieces.map(piece => {
            const index = data.gcms.portfolioPieces.indexOf(piece)
            const isOdd = index % 2
            const { title, subtitle, featureImage, year, linkType, linkRef } = piece
            return (
              <div className="portfolio-piece" style={{width: '55vw', height: '35vh', marginBottom: '70vh', float: isOdd ? 'right' : 'left' }}>
                <div style={{textAlign: isOdd ? 'right' : 'left' }}>
                  <h3 className="title" style={{fontSize: '175%', color: '#545FAB'}}>{title}</h3>
                  <p className="subtitle" style={{fontSize: '150%', color: '#E2E2E2'}}>{year}</p>
                </div>
                <img className="feature-img" src={featureImage.url} style={{width: '50vw', float: isOdd ? 'right' : 'left' , border: '15px solid #545FAB', zIndex: 1}}/>
                <div style={{backgroundColor: '#545FAB', width: '13vw', height: '13vw', float: isOdd ? 'left' : 'right' , color: '#FDF9FD', position: 'relative', bottom: '30%', zIndex: -1}}>
                  <div style={{position: 'relative', top: '50%', padding: '2.5%'}}>
                    <p>{subtitle}</p>
                    <a href={linkRef} className="link" style={{color: '#FDF9FD', textDecoration: 'none'}}>{linkType}</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )}
  />
)

export default Portfolio
