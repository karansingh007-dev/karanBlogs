// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { deleteBlog, likeBlog } from '../redux/blogSlice';

// // BlogDetail component - displays full blog post
// function BlogDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isLiked, setIsLiked] = useState(false);
//   const [animateLike, setAnimateLike] = useState(false);

//   // Get the specific blog from Redux store
//   const blog = useSelector((state) =>
//     state.blogs.blogs.find((blog) => blog.id === parseInt(id))
//   );

//   // Handle like blog
//   const handleLike = () => {
//     dispatch(likeBlog(blog.id));
//     setIsLiked(true);
//     setAnimateLike(true);
//     setTimeout(() => setAnimateLike(false), 600);
//     setTimeout(() => setIsLiked(false), 2000);
//   };

//   // Handle delete blog
//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete this blog?')) {
//       dispatch(deleteBlog(blog.id));
//       navigate('/');
//     }
//   };

//   // Handle edit blog
//   const handleEdit = () => {
//     navigate(`/edit/${blog.id}`);
//   };

//   // If blog not found, show error
//   if (!blog) {
//     return (
//       <div className="container mx-auto px-4 py-8 animate-fade-in">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
//           <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             ← Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate('/')}
//           className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2 hover:scale-105 transform transition duration-200"
//         >
//           <span>←</span>
//           <span>Back to All Blogs</span>
//         </button>

//         {/* Blog Content Card */}
//         <article className="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up">
//           {/* Blog Image */}
//           <div className="w-full h-96 bg-gray-200 overflow-hidden">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               onError={(e) => {
//                 e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format';
//               }}
//             />
//           </div>

//           {/* Blog Details */}
//           <div className="p-8">
//             {/* Title */}
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-down">
//               {blog.title}
//             </h1>

//             {/* Metadata */}
//             <div className="flex items-center text-gray-600 mb-6 pb-6 border-b border-gray-200">
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-lg">✍️</span>
//                   <span className="font-semibold">{blog.author}</span>
//                 </div>
//                 <span>•</span>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-lg">📅</span>
//                   <span>{blog.date}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="prose prose-lg max-w-none mb-8">
//               <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
//                 {blog.content}
//               </p>
//             </div>

//             {/* Like Section */}
//             <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-6">
//               <button
//                 onClick={handleLike}
//                 className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 transform ${
//                   isLiked
//                     ? 'bg-red-100 text-red-600 scale-110'
//                     : 'bg-gray-100 hover:bg-red-50 hover:text-red-500 hover:scale-105'
//                 }`}
//               >
//                 <span className={`text-2xl ${animateLike ? 'animate-bounce' : ''}`}>
//                   {isLiked ? '❤️' : '🤍'}
//                 </span>
//                 <span className="font-semibold text-lg">{blog.likes} Likes</span>
//               </button>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex space-x-4">
//               <button
//                 onClick={handleEdit}
//                 className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg font-semibold"
//               >
//                 ✏️ Edit This Blog
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg font-semibold"
//               >
//                 🗑️ Delete This Blog
//               </button>
//             </div>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// }

// export default BlogDetail;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBlog, likeBlog } from '../redux/blogSlice';

// BlogDetail component - displays full blog post
function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  // Get the specific blog from Redux store
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );

  // Handle like blog
  const handleLike = () => {
    dispatch(likeBlog(blog.id));
    setIsLiked(true);
  };

  // Handle delete blog
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(blog.id));
      navigate('/');
    }
  };

  // Handle edit blog
  const handleEdit = () => {
    navigate(`/edit/${blog.id}`);
  };

  // If blog not found, show error
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to All Blogs</span>
        </button>

        {/* Blog Content Card */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Blog Image */}
          <div className="w-full h-96 bg-gray-200 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format';
              }}
            />
          </div>

          {/* Blog Details */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">✍️</span>
                  <span className="font-semibold">{blog.author}</span>
                </div>

                <span>•</span>

                <div className="flex items-center space-x-2">
                  <span className="text-lg">📅</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className=" max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </p>
            </div>

            {/* Like Section */}
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg ${
                  isLiked
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <span className="text-2xl">
                  {isLiked ? '❤️' : '🤍'}
                </span>
                <span className="font-semibold text-lg">
                  {blog.likes} Likes
                </span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleEdit}
                className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md font-semibold"
              >
                ✏️ Edit This Blog
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 shadow-md font-semibold"
              >
                🗑️ Delete This Blog
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogDetail;