import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import BlogCardSkeleton from "../components/BlogCardSkeleton"
import { useBlogs, type BlogsTypes } from "../hooks/blogs"


const Blogs = () => {

  const {loading, blogs} = useBlogs() as { loading: boolean; blogs: BlogsTypes[] };
  if(loading){
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className="min-w-screen mt-3 mb-4">
            {[1, 2, 3].map((item) => (
              <BlogCardSkeleton key={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if(blogs.length === 0){
    console.log("no blogs");
    toast.error("No Blogs exist create new one", {
        position:'top-right',
        toastId:'no-blogs'
    });
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="min-w-md mt-3 mb-4">
          {blogs.length > 0  && (blogs.map((blog)=>(
            <BlogCard 
              id={blog.id}
              authorName={blog.author.name || "Anonymous"} 
              title={blog.title} 
              content={blog.content} 
              publishedDate={new Date().toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })} 
            />
          )))}        
        </div>
      </div>
    </div>
  )
}

export default Blogs
