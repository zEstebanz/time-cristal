import React from 'react'
import { Link } from 'react-router-dom'

function Rutine() {
    return (
        <div className='card-rutine'>
            <Link to={"/rutine"}>
                <h1>Rutine</h1>
            </Link>
            <hr />
            <div className="list-rutine">
                <ul>
                    <li>
                        <input type="checkbox" id="task1" />
                        <label htmlFor="task1">Task 1</label>
                    </li>
                    <li>
                        <input type="checkbox" id="task2" />
                        <label htmlFor="task2">Task 2</label>
                    </li>
                    <li>
                        <input type="checkbox" id="task3" />
                        <label htmlFor="task3">Task 3</label>
                    </li>
                </ul>
            </div>

            <div className="container-button">
                <button className='button-rutine'> + Create new task</button>
            </div>

            <hr style={{ marginTop: '20px' }} />

        </div>
    )
}

export default Rutine