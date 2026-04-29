
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBlog, likeBlog } from '../redux/blogSlice';

// BlogCard component to display individual blog
function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  // Handle delete blog
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(blog.id));
    }
  };

  // Handle edit blog - navigate to edit page
  const handleEdit = () => {
    navigate(`/edit/${blog.id}`);
  };

  // Handle like blog
  const handleLike = () => {
    dispatch(likeBlog(blog.id));
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 2000);
  };

  // Navigate to blog detail page
  const handleViewBlog = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
      {/* Blog Image */}
      <div 
        className="cursor-pointer overflow-hidden h-48 bg-gray-200"
        onClick={handleViewBlog}
      >
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format';
          }}
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Blog Title */}
        <h2 
          className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition duration-200 cursor-pointer"
          onClick={handleViewBlog}
        >
          {blog.title}
        </h2>
      
      {/* Blog Metadata */}
      <div className="text-sm text-gray-500 mb-4">
        <span>By {blog.author}</span>
        <span className="mx-2">•</span>
        <span>{blog.date}</span>
      </div>
      
      {/* Blog Content */}
      <p className="text-gray-700 mb-4 line-clamp-3">
        {blog.content}
      </p>

      {/* Read More Link */}
      <button
        onClick={handleViewBlog}
        className="text-blue-600 hover:text-blue-800 font-semibold mb-4 hover:underline"
      >
        Read More →
      </button>
      
      {/* Like Section */}
      <div className="flex items-center mb-4 text-gray-600">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform ${
            isLiked 
              ? 'bg-red-100 text-red-600 scale-110' 
              : 'bg-gray-100 hover:bg-red-50 hover:text-red-500 hover:scale-105'
          }`}
        >
          <span className="text-xl">
            {isLiked ? '❤️' : '🤍'}
          </span>
          <span className="font-semibold">{blog.likes} Likes</span>
        </button>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
        >
          🗑️ Delete
        </button>
      </div>
      </div>
    </div>
  );
}

export default BlogCard;