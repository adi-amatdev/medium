import Auth from "../components/Auth"
import Quote from "../components/Quote"


const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
        <Auth type="signup" />
        <Quote />
    </div>
  )
}

export default SignUp
