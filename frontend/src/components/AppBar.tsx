import Avatar from "./Avatar"

const AppBar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between py-4">
        <div className="pl-3 text-2xl">
            Medium
        </div>
        <div className="pr-3">
            <Avatar name="name" size={9} textSize="lg" />
            
        </div>
        
    </div>
  )
}

export default AppBar