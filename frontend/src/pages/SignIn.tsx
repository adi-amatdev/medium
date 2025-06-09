import Quote from "../components/Quote"
import { SignInComponent } from "../components/Auth"

const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <SignInComponent />
      <Quote />
    </div>
  )
}

export default SignIn
