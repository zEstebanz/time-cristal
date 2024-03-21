import React from 'react'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <main>
            <section className="section-home">
                <div className="content">

                    <h1 className='text-center text-6xl font-semibold font-body pt-[80px]'>
                        <span className='text-blanco text-primario'>Time</span>
                        <span className='text-principal'>Crystal</span>
                    </h1>

                    <div className='mt-8 flex flex-col items-center justify-center'>
                        <Link to={"/login"}>
                            <Button variant="custom">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage