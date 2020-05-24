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
      <div style={{marginTop: '65vh'}}>
        <h1 style={{fontSize: '5vw'}}>Take a look at what I've built: </h1>
        <div className="portfolio-grid">
          {data.gcms.portfolioPieces.map(piece => {
            const index = data.gcms.portfolioPieces.indexOf(piece)
            const isOdd = index % 2
            const { title, subtitle, featureImage, year, linkType, linkRef } = piece
            //figure out if you need a grid or not
            return (
              <div className="portfolio-piece" style={{width: '75vw', height: '40vh', marginBottom: '100vh', float: isOdd ? 'right' : 'left', display: 'grid', gridTemplateColumns: 'auto', gridTemplateRows: 'auto'}}>
                <div style={{textAlign: isOdd ? 'right' : 'left' }}>
                  <h3 className="title" style={{fontSize: '200%', color: '#545FAB', whiteSpace: 'nowrap', float: 'left'}}>{title}</h3>
                  <p className="subtitle" style={{fontSize: '150%', color: '#E2E2E2', float: 'left'}}>{year}</p>
                </div>
                <img className="feature-img" src={featureImage.url} style={{width: '65vw', float: isOdd ? 'right' : 'left' , border: '20px solid #545FAB', zIndex: 1, gridColumn: isOdd ? '2 / span 7' : '3 / span 8', gridRow: '2 / span 8'}}/>
                <div className="portfolio-piece-block" style={{backgroundColor: '#545FAB', width: '12.5vw', height: '12.5vw', float: isOdd ? 'left' : 'right' , color: '#FDF9FD', zIndex: -1, textAlign: 'left', padding: '5%', gridColumn: isOdd ? '1 / span 3' : '7 / span 9', gridRow: '9 / span 10'}}>
                  <div className="portfolio-piece-block-text" style={{marginTop: '45%', zIndex: 1}}>
                    <p style={{fontWeight: 300, fontSize: '1.2vw'}}>{subtitle}</p>
                    <a href={linkRef} className="link" style={{color: '#FDF9FD', textDecoration: 'none', fontWeight: 600, fontSize: '.85vw'}}>{linkType}</a>
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
