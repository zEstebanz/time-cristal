import { useState } from 'react'
import NavBar from './NavBar'

function Header() {

    return (
        <>
            <NavBar />
            <section className='bg-fondo min-h-screen'>
                <h1 className='text-center text-6xl font-semibold font-body pt-[150px]'>
                    <span className='text-blanco'>Time</span>
                    <span className='text-principal'>Crystal</span>
                </h1>
                
                {/* <h2>Welcome {username}!</h2> */}
            </section>
        </>
    )
}

export default Header