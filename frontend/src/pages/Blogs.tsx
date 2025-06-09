import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"


const Blogs = () => {

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
                authorName="adam"
                title="bible tlt so'sadhqwo diowqdhioqwh dihqw diqw"
                content="thou art may not see the light of day, but the light of day shall see you"
                publishedDate="1000 bc"
          />
          <BlogCard
                authorName="adam"
                title="bible"
                content="thou art may not see the light of day, but the light of day shall see you"
                publishedDate="1000 bc"
          />
          <BlogCard
                authorName="adam"
                title="bible"
                content="thou art may not see the light of day, but the light of day shall see you"
                publishedDate="1000 bc"
          />
        </div>
      </div>
    </div>
  )
}

export default Blogs
