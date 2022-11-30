import FormLogin from '../FormLogin/FormLogin'
import Image from 'next/image'


const Login = () => {
  return (
    <section className="h-screen">
      <div className="is-centered">

        
        <div className="columns" >
    
          <div className="column" class="mt-40 is responsive grid-cols-2 flex items-center">
            <h1 class="mr-9 text-white text-center font-mono text-5xl italic">Restaurante Siglo XXI </h1>
            <Image
              className="w-full"
              alt="logo"
              src="/static/coci.jpeg"
              width={400}
              height={380}
            />
          </div>
          <div className="column">
            <FormLogin />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
