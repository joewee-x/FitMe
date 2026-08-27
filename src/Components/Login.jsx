import { useState } from "react"
import { FaApple, FaApplePay, FaGoogle, } from "react-icons/fa"
import { FaAppleWhole, FaFacebookF } from "react-icons/fa6"

const Login = ({ handleLogin, setShowLogin }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    handleLogin({
      name: name,
      email: email
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className=" bg-white w-[90%] max-w-md rounded-x p-6 relative">

         <h2 className="text-md pb-5 text-center">
                Login or SignUp
          </h2>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setShowLogin(false)}
            className="text-xl"
          >
            X
          </button>

        </div>
        <hr  className="py-2"/>


        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="w-fullh-10 border rounded-lg px-3 outline-none"/>

          <button type="submit" className=" bg-[#0057FF] text-white w-full h-10 rounded-lg">
            Sign In
          </button>

        </form>

        <div className="flex justify-center py-3">
            <p>Or</p>  
        </div>
        <div>
            <div>
                <button type="submit" className="flex items-center justify-center gap-3 bg-white text-black w-full h-10 rounded-lg border border-[#B5BAC2]" >
                <FaGoogle /> Continue with Google
                </button>
            </div>

            <div>
                <button type="submit" className="flex items-center my-3 justify-center gap-3 bg-white text-black w-full h-10 rounded-lg border border-[#B5BAC2]" >
                <FaApplePay /> Continue with Apple
                </button>
            </div>

            <div>
                <button type="submit" className="flex items-center justify-center gap-3 bg-white text-black w-full h-10 rounded-lg border border-[#B5BAC2]" >
                <FaFacebookF /> Continue with Faacebook
                </button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Login