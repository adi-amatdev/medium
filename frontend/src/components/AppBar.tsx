import Avatar from "./Avatar"
import {Link} from "react-router-dom"

const AppBar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between py-4">
        <Link to={`/blogs`}>
             <div className="pl-8 text-2xl">
                Medium
              </div>
        </Link>  
        <div className="pr-5 flex flex-row">
            <div className="pr-10">
              <Link to={`/publish`}>
                   <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      New
                    </button>
               </Link>
            </div>
            <Avatar name="name" size={9} textSize="lg" />
            
        </div>
        
    </div>
  )
}

export default AppBar