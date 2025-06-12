import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string
}


const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
  return (
    <Link  className="m-2 cursor-pointer block" to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-300 w-full max-w-2xl mx-auto transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-white rounded-lg">
        <div className="flex flex-wrap items-center">
          <div>
            <Avatar name={authorName} />  
          </div>  
          <div className="pl-2">
            {authorName}  
          </div>
          <div className="pl-1 mb-2 items-center">
            .
          </div>
          <div className="pl-1 text-gray-400">
            {publishedDate}
          </div>
        </div>
        <div className="pt-2">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold font-mono">
            {title}
          </div>
          <div className="pt-2 font-thin text-sm md:text-md">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-gray-400 text-xs md:text-sm pt-2 mb-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
