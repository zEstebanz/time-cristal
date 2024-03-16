import NavBar from './NavBar'
import CardTime from './Home/CardTime'
import Projects from './Home/Projects'
import Diary from './Home/Diary'
import Rutine from './Home/Rutine'
import Notes from './Home/Notes'

function Header() {
    // Determinar el tamaño de la pantalla
    const isSmallScreen = window.innerWidth <= 796;

    return (
        <>
            <NavBar />
            <section className='section-home'>
                <div className="content-wrapper">
                    <div className="card-container">
                        {/* Mostrar componentes según el tamaño de la pantalla */}
                        {isSmallScreen ? (
                            <>
                                <Rutine />
                                <Diary />
                                <Notes />
                                <Projects />
                            </>
                        ) : (
                            <>
                                <Diary />
                                <Rutine />
                                <Notes />
                                <Projects />
                            </>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;

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