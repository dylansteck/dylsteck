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
      <div className="portfolio" style={{marginTop: '65vh'}}>
        <h1 style={{fontSize: '6.5vw', marginBottom: '10vh'}}>Take a look at what I've built: </h1>
        <div className="portfolio-grid" style={{margin: '2.5%'}}>
          {data.gcms.portfolioPieces.map(piece => {
            const index = data.gcms.portfolioPieces.indexOf(piece)
            const isEven = !(index % 2)
            const { title, subtitle, featureImage, year, linkType, linkRef } = piece
            //figure out if you need a grid or not
            return (
              <div className="portfolio-piece" style={{position: 'relative', width: '60vw', height: '40vh', marginBottom: '100vh', float: isEven ? 'left' : 'right'}}>
                <div style={{textAlign: isEven ? 'left' : 'right', marginBottom: '15%'}}>
                  <h3 className="title" style={{fontSize: '200%', color: '#545FAB'}}>{title}</h3>
                  <p className="subtitle" style={{fontSize: '150%', color: '#E2E2E2'}}>{year}</p>
                </div>
                <div style={{background: `url(${featureImage.url}) no-repeat center center`, backgroundSize: 'cover',  width: '65vw', height: '50vh', float: isEven ? 'left' : 'right', border: '16px solid #545FAB', zIndex: 1, position: 'absolute', top: '50%', marginTop: '20%'}}></div>
                <div className="portfolio-piece-block" style={{backgroundColor: '#545FAB', width: '12.5vw', height: '12.5vw', float: isEven ? 'right' : 'left' , color: '#FDF9FD', zIndex: -1, padding: '5%', position: 'absolute', top: '195%', right: isEven ? '-25%' : '75%'}}>
                  <div className="portfolio-piece-block-text" style={{marginTop: '70%', zIndex: 1}}>
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
