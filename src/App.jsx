import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogForm from './pages/BlogForm';
import BlogDetail from './pages/BlogDetail';

// Main App component
function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Home page - shows all blogs */}
          <Route path="/" element={<Home />} />
          
          {/* Add new blog page */}
          <Route path="/add" element={<BlogForm />} />
          
          {/* Edit blog page - uses same form component */}
          <Route path="/edit/:id" element={<BlogForm />} />
          
          {/* Blog detail page - shows full blog */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
