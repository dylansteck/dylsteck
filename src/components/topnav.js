import React from "react"


const TopNav = () => (
  <div>
    <ul style={{listStyleType: 'none', "& li": {display: 'inline-block', marginLeft: '5%', color: '#545FAB', fontWeight: 'bold'}}}>
      <li>About</li>
      <li>Brief</li>
      <li>Contact</li>
    </ul>
  </div>
)

export default TopNav
