import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <nav>
        <ul className='nav-ul'>
            <li className='nav-li'><h3>Where in the world?</h3></li>
            <li className='nav-li'>Dark Mode</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
