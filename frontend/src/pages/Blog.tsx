import { useParams } from "react-router-dom"
import { useBlog, type BlogsTypes } from "../hooks/blogs";
import BlogPage from "../components/BlogPage";
import BlogPageSkeleton from "../components/BlogPageSkeleton";



const Blog = () => {
  const { id } = useParams<{id: string}>();
  const { loading, blog }  = useBlog(id ? { id } : { id: "" }) as { loading: boolean; blog: BlogsTypes | undefined };

  if(loading){
    return (
      <div>
        <BlogPageSkeleton />
      </div>
    )
  }
  if (!blog) {
    return (
      <div>
        Blog not found.
      </div>
    );
  }
  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  )
}

export default Blog
