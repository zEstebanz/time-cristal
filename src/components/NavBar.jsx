import React from 'react'


function NavBar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <a href="/">Time <span>Cristal</span></a>
        </div>
        <ul className='navbar-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/bloc">Bloc</a></li>
        </ul>
    </nav>
  )
}

export default NavBar