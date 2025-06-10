

const Avatar = ({name,size=6,textSize}:{name:string, size?:number, textSize?:string}) => {
  const sizeClasses = {
    1: 'w-1 h-1',
    2: 'w-2 h-2',
    4: 'w-4 h-4',
    6: 'w-6 h-6',
    8: 'w-8 h-8',
    9: 'w-9 h-9',
    10: 'w-10 h-10',
    12: 'w-12 h-12',
    16: 'w-16 h-16',
    20: 'w-20 h-20',
    24: 'w-24 h-24',
  }[size] || 'w-6 h-6';
  
  return (
    <div>
        <div className={`relative inline-flex items-center justify-center ${sizeClasses} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`${textSize === 'sm' ? 'text-sm' : 'text-xl'} font-extralight text-gray-600 dark:text-gray-300`}>
              {name.slice(0,1).toLocaleUpperCase()}
            </span>
        </div>
    </div>
  )
}

export default Avatar
