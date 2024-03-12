import React from 'react'
import FormLogin from '../components/Form/FormLogin'

function Login() {
  return (
    <main>
      <section className="section-form">
        <h1 className='text-center text-6xl font-semibold font-body pt-[80px]'>
          <span className='text-blanco text-primario'>Log</span>
          <span className='text-principal'>In</span>
        </h1>

        <div className='flex flex-col items-center justify-center'>
          <FormLogin />
        </div>
      </section>
    </main>
  )
}

export default Login