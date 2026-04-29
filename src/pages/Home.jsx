import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import HeroShowcase from '../components/HeroShowcase';

// Home page component - displays all blogs
function Home() {
  // Get all blogs from Redux store
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div>
      {/* Hero Showcase Section */}
      <HeroShowcase />
      
      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          All Blog Posts
        </h1>
      
        {/* Check if blogs exist */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">No blogs yet! Create your first blog post.</p>
          </div>
        ) : (
          // Display blogs in a grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
