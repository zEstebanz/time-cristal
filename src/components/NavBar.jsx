import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

//agregar el componete Link de react-router-dom
function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <section>
      <nav className='fixed w-screen flex justify-between items-center px-4 py-2 bg-gris font-semibold text-blanco'>
        <ul className='flex h-16 items-center'>
          <li className='pr-1'>
            <button onClick={()=>(!open ? setOpen(true): setOpen(false))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-9 text-blanco hover:text-principal"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </li>
          <li>
            <a href="/" class='logo flex text-2xl'>
              <p class='text-blanco'>Time</p><p class='text-principal'>Crystal</p>
            </a>
          </li>
        </ul>
        <ul className='flex h-16 items-center'>
          <li className='notificacion pl-4'><a href="/"><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-blanco hover:text-principal"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          </a>
          </li>
          <li className='pl-4'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className='text-principal'>GAY</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>

      <div className={`${!open && 'hidden'} mt-20 bg-gris/40 min-h-screen w-full fixed backdrop-blur-sm`} onClick={()=>setOpen(false)}>
      </div>
      <div className={`${open ? ' w-50 px-2' : ' w-0'} flex-col fixed space-y-10 min-h-screen mt-20 justify-between bg-gris transition-all duration-300`}>
        <ul className={`${!open && 'hidden'} `}>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">
                </path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1">
                </rect>
              </svg>
              <p>Notas</p>
            </Link>
          </li>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="7"></circle>
                <polyline points="12 9 12 12 13.5 13.5">
                </polyline>
                <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83">
                </path></svg>
              <p>Recordatorios</p>
            </Link>
          </li>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
                </rect><line x1="16" y1="2" x2="16" y2="6">
                </line><line x1="8" y1="2" x2="8" y2="6">
                </line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <p>Agenda</p>
            </Link>
          </li>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                </path></svg>
              <p>Proyectos</p>
            </Link>
          </li>
        </ul>
        <ul className={`${!open && 'hidden'} `}>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <p>Configuracion</p>
            </Link>
          </li>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <p>Mi Cuenta</p>
            </Link>
          </li>
          <li>
            <Link className='flex rounded-md items-center gap-4 px-3 py-2 text-blanco hover:text-principal hover:bg-fondo/20'>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <p>Ayuda</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavBar