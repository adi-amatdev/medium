import { Link } from "react-router-dom"

const Auth = () => {
  return (
    <div
    className="flex flex-col justify-center items-center gap-4"
    >
        <div className="text-4xl font-medium font-serif " >
            Create an account
        </div>
        <div className="gap-4 mt-2 text-slate-400">
            Already have an account? <Link to="/login" className="underline">Login</Link>
        </div>
        
    </div>
  )
}

export default Auth