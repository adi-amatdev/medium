import Avatar from "./Avatar"

const AppBar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between px-10 py-4">
        <div className="text-2xl">
            Medium
        </div>
        <div>
            <Avatar name="name" size={10} textSize="lg" />
            
        </div>
        
    </div>
  )
}

export default AppBar