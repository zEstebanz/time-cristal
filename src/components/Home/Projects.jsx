import React from 'react'
import CarruselProject from '../ui/CarruselProject'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='projects'>
            <Link to={"/projects"}>
                <h1>Projects</h1>
            </Link>
            <CarruselProject />
        </div>
    )
}

export default Projects