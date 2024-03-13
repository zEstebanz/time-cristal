import NavBar from './NavBar'
import Calendar from './Home/Calendar'
import Time from './Home/Time'
import Project from './Home/Project'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <NavBar />
            <section className='section-home'>

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


                    <div className='time'>
                        <Time />
                    </div>

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

                    <div className='note'>
                        <Link to={"/notes"}>
                            <h1>Notes</h1>
                        </Link>
                        <button className='button-note'> + Create new note</button>
                    </div>

                    <div className='projects'>
                        <Link to={"/projects"}>
                            <h1>Projects</h1>
                        </Link>
                        <Project />
                    </div>
                </div>

            </section>

        </>
    )
}

export default Header

{/* <div class='flex justify-center pt-[100px]'>
                    <div class='bg-[#000000e2] rounded-[15px] h-[50px] w-[250px] shadow-xl'>
                        <h2 class='text-2xl text-center font-bold text-blanco justify-center p-2'>16:08 pm</h2>
                    </div>
                </div>



                <div class='flex justify-center pt-2'>
                    <div class='bg-[#000000e2] rounded-[15px] p-6 h-[450px] w-[250px] shadow-xl'>
                        <h2 class='text-2xl text-center font-bold mb-4 text-blanco'>Rutine</h2>
                        <hr class='border-t border-white mb-4' />
                        <ul className="list-none text-white ml-6">
                            <li className="flex items-center mb-2">
                                <input type="checkbox" id="item1" className="hidden" />
                                <label htmlFor="item1" className="flex items-center cursor-pointer">
                                    <span className="w-6 h-6 border border-gray-300 mr-2" />
                                    Item 1
                                </label>
                            </li>
                            <li className="flex items-center mb-2">
                                <input type="checkbox" id="item2" className="hidden" />
                                <label htmlFor="item2" className="flex items-center cursor-pointer">
                                    <span className="w-6 h-6 border border-gray-300 mr-2" />
                                    Item 2
                                </label>
                            </li>
                            <li className="flex items-center mb-2">
                                <input type="checkbox" id="item3" className="hidden" />
                                <label htmlFor="item3" className="flex items-center cursor-pointer">
                                    <span className="w-6 h-6 border border-gray-300 mr-2" />
                                    Item 3
                                </label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="item4" className="hidden" />
                                <label htmlFor="item4" className="flex items-center cursor-pointer">
                                    <span className="w-6 h-6 border border-gray-300 mr-2" />
                                    Item 4
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>  */}