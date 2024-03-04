import React from 'react'
import { Button } from '@/ui/Button'
//agregar el componete Link de react-router-dom

function NavBar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <a href="/">Time <span>Crystal</span></a>
        </div>
        <ul className='navbar-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/bloc">Bloc</a></li>
            <Button>holaaaaa</Button>
        </ul>
    </nav>
  )
}

export default NavBar