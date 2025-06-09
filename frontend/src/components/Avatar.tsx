

const Avatar = ({name,size=6,textSize}:{name:string, size?:number, textSize?:string}) => {
  return (
    <div>
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-${textSize === 'sm'?'sm':'xl'} font-extralight text-gray-600 dark:text-gray-300`}>
              {name.slice(0,1).toLocaleUpperCase()}
            </span>
        </div>
    </div>
  )
}

export default Avatar
