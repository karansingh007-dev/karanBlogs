import { Link } from 'react-router-dom';

// Navbar component for navigation
function Navbar() {
  return (
    <nav className=" bg-blue-800 text-white shadow-lg ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold  hover:scale-110 transform transition-all duration-200">
            📝 Info blogs
          </Link>
          
          {/* Navigation Links */}
          <div className="space-x-4">
            <Link 
              to="/" 
              className="hover:text-blue-200 hover:scale-110 transform transition-all duration-200 inline-block"
            >
              Home
            </Link>
            <Link 
              to="/add" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
            >
              + Add Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
