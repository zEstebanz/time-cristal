import { useState } from 'react'
import NavBar from './NavBar'

function Header() {
    // modificar este componente
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