import { useState } from 'react'
import NavBar from './NavBar'

function Header() {
    // modificar este componente
    return (
        <>
            <section className='bg-fondo min-h-screen'>
                <h1 className='text-center text-6xl font-semibold font-body pt-80'>
                    <span className='text-blanco'>Time</span>
                    <span className='text-principal'>Crystal</span>
                </h1>
            </section>
        </>
    )
}

export default Header