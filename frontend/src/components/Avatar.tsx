

const Avatar = ({authorName, image}) => {
  return (
    <div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{authorName.splice(0,2)}</span>
        </div>
    </div>
  )
}

export default Avatar
