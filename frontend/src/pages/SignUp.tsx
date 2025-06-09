import Quote from "../components/Quote"
import { SignUpComponent } from "../components/Auth"

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <SignUpComponent />
        <Quote />
    </div>
  )
}

export default SignUp
