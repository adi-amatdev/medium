import type { Blogs } from "../hooks/blogs"
import AppBar from "./AppBar"
import Avatar from "./Avatar"


export const BlogPage = ({blog}:{blog:Blogs}) => {
  return (
    <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-12 gap-6 mt-8">
                    <div className="col-span-12 md:col-span-8 p-6 md:p-8 rounded-lg  bg-white">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            {blog.title}
                        </h1>
                        <div>
                            <p className="text-gray-500 mt-2 text-lg">
                                Posted on {new Date().toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                        
                        <div className="mt-6">
                            <p className="whitespace-pre-wrap leading-relaxed text-base md:text-lg">{blog.content}</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 p-4 rounded-lg bg-white ">
                        <div className="text-xl font-light mb-4 text-slate-400">Author</div>
                        <div className="flex items-center space-x-4">
                            <div>
                            <Avatar name={blog.author.name || "Anonymous"} size={12} textSize="lg" />
                            </div>
                            <div>
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-bold text-3xl">
                                        {blog.author?.name || "Unknown"}
                                    </h2>
                                </div>
                                <p className="text-gray-500 mt-2 text-lg">
                                    {blog.author?.bio || "No bio available"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage