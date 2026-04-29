import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addBlog, updateBlog } from '../redux/blogSlice';

// BlogForm component for adding and editing blogs
function BlogForm() {
  const { id } = useParams(); // Get blog ID from URL if editing
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get the blog to edit if ID exists
  const existingBlog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
  });

  // Load existing blog data when editing
  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        content: existingBlog.content,
        author: existingBlog.author,
        image: existingBlog.image || '',
      });
    }
  }, [existingBlog]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form (image is optional)
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in title, content, and author fields!');
      return;
    }

    // Add or update blog
    if (id) {
      // Update existing blog
      dispatch(updateBlog({
        id: id,
        ...formData,
      }));
    } else {
      // Add new blog
      dispatch(addBlog(formData));
    }

    // Navigate back to home
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl ">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-slide-down">
        {id ? 'Edit Blog' : 'Add New Blog'}
      </h1>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-8 hover:shadow-xl  ">
        {/* Title Input */}
        <div className="mb-6">
          <label 
            htmlFor="title" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-blue-500 hover:border-blue-400"
          />
        </div>

        {/* Author Input */}
        <div className="mb-6">
          <label 
            htmlFor="author" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter your name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg   hover:border-blue-400"
          />
        </div>

        {/* Image URL Input */}
        <div className="mb-6">
          <label 
            htmlFor="image" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Image URL (optional)
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg  hover:border-blue-400"
          />
          {formData.image && (
            <div className="mt-3">
              <img 
                src={formData.image} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format';
                }}
              />
            </div>
          )}
        </div>

        {/* Content Textarea */}
        <div className="mb-6">
          <label 
            htmlFor="content" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            rows="8"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg  hover:border-blue-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
          >
            {id ? 'Update Blog' : 'Add Blog'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 hover:scale-105 transform transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
