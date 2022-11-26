import FormLogin from '../FormLogin/FormLogin'
import Image from 'next/image'


const Login = () => {
  return (
    <section className="h-screen">
      <div className="is-centered">

        
        <div className="columns" >
          <div className="column" class="mt-40 is responsive grid-cols-2 flex items-center">
            <Image
              className="w-full"
              alt="logo"
              src="/static/logo.png"
              width={420}
              height={180}
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
