import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../ui/Calendar'

function Diary() {
    return (
        <div className="card-container">
            <div className='calendar'>
                <Link to={"/calendar"}>
                    <h1>Calendar</h1>
                </Link>
                <Calendar />
                <hr />
                <h1>Recordatorios</h1>
                <div className='reminder text-center'>
                    <h3>Fecha: [Fecha del recordatorio]</h3>
                    <h2>Título del recordatorio</h2>
                </div>
            </div>
        </div>
    )
}

export default Diary