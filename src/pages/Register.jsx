import FormRegister from '../components/Form/FormRegister'

function Register() {
  return (
    <main>
      <section className="section-form">
        <h1 className='text-center text-6xl font-semibold font-body pt-[80px]'>
          <span className='text-blanco text-primario'>Regis</span>
          <span className='text-principal'>ter</span>
        </h1>

        <div className='flex flex-col items-center justify-center'>
          <FormRegister />
        </div>
      </section>
    </main>
  )
}

export default Register