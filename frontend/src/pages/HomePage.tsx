import { Link } from 'react-router-dom';
import TrendingPost from '../components/TrendingPost';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Medium</div>
        <div className="flex gap-4 items-center">
          <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
          <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Stay curious.</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <Link to="/signup" className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors">
          Start reading
        </Link>
      </section>

      {/* Featured Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="inline-block w-8 h-1 bg-black mr-3"></span>
            Trending on Medium
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to build a Medium clone with React and Node.js",
                author: "John Doe",
                date: "Jun 12",
                readTime: "5 min"
              },
              {
                title: "10 Tips for Better React Performance",
                author: "Jane Smith",
                date: "Jun 10",
                readTime: "7 min"
              },
              {
                title: "Understanding TypeScript Generics",
                author: "Alex Johnson",
                date: "Jun 8",
                readTime: "4 min"
              },
              {
                title: "The Future of Web Development",
                author: "Sarah Williams",
                date: "Jun 5",
                readTime: "6 min"
              },
              {
                title: "Building Scalable Backend Systems",
                author: "Mike Brown",
                date: "Jun 3",
                readTime: "8 min"
              },
              {
                title: "CSS Grid vs Flexbox: When to Use Each",
                author: "Emily Davis",
                date: "Jun 1",
                readTime: "5 min"
              }
            ].map((post, index) => (
              <TrendingPost 
                key={index}
                number={index + 1}
                author={post.author}
                title={post.title}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">Medium</div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="/blogs" className="hover:text-gray-900">Blogs</Link>
            <Link to="/signin" className="hover:text-gray-900">Sign In</Link>
            <Link to="/signup" className="hover:text-gray-900">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;