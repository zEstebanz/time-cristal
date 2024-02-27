import { useState } from 'react'
import NavBar from './NavBar'

function Header() {
    return (
        <>
            <NavBar />
            <section className='section-port'>
                <h1>Time <span>Crystal</span></h1>
            </section>
        </>
    )
}

export default Header