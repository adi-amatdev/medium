import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks/blogs"


const Blogs = () => {
  type Blog = {
    author: {
      name?: string;
    };
    title: string;
    content: string;
  };

  const {loading, blogs} = useBlogs() as { loading: boolean; blogs: Blog[] };
  if(loading){
    return (
      <div>
        loading ...
      </div>
    )
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog)=>(
            <BlogCard 
              authorName={blog.author.name || "Anonymous"} 
              title={blog.title} 
              content={blog.content} 
              publishedDate={"2nd Jan 2024"} 
            />
          ))}        
        </div>
      </div>
    </div>
  )
}

export default Blogs
