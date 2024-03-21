import React from 'react'
import { Link } from 'react-router-dom'
function Notes() {
    return (
        <div className='note'>
            <Link to={"/notes"}>
                <h1>Notes</h1>
            </Link>
            <button className='button-note'> + Create new note</button>
        </div>
    )
}

export default Notes