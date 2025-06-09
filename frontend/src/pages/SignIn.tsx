import Quote from "../components/Quote"
import Auth from "../components/Auth"

const SignIn = () => {
  return (
    <div className="grid grid-cols-2">
      <Auth type='signin'/>
      <Quote />
    </div>
  )
}

export default SignIn
