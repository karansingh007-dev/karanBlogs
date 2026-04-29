import { createSlice, nanoid } from "@reduxjs/toolkit";

// Helper function to load blogs from localStorage
const loadBlogsFromLocalStorage = () => {
  try {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      return JSON.parse(savedBlogs);
    }
  } catch (error) {
    console.error('Error loading blogs from localStorage:', error);
  }
  // Return default blogs if nothing in localStorage
  return [
    {
      id: nanoid(),
      title: "Welcome to My Blog",
      content: "This is my first blog post. I am excited to share my thoughts and ideas with you! Welcome to a journey of learning and discovery. In this blog, we will explore various topics related to web development, programming, and technology. Stay tuned for more exciting content!",
      author: "Admin",
      date: new Date().toLocaleDateString(),
      likes: 5,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format',
    },
    {
      id: nanoid(),
      title: "Getting Started with React",
      content: "React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to get started. React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      author: "Admin",
      date: new Date().toLocaleDateString(),
      likes: 12,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format',
    },
  ];
};

// Helper function to save blogs to localStorage
const saveBlogsToLocalStorage = (blogs) => {
  try {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  } catch (error) {
    console.error('Error saving blogs to localStorage:', error);
  }
};

const initialState = {
  blogs: loadBlogsFromLocalStorage(),
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,

  reducers: {
    addBlog: (state, action) => {
      const blog = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        author: action.payload.author,
        image: action.payload.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format',
        date: new Date().toLocaleDateString(),
        likes: 0,
      };

      state.blogs.push(blog);
      saveBlogsToLocalStorage(state.blogs);
    },

    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );
      saveBlogsToLocalStorage(state.blogs);
    },

    updateBlog: (state, action) => {
      const blog = state.blogs.find(
        (blog) => blog.id === action.payload.id
      );

      if (blog) {
        blog.title = action.payload.title;
        blog.content = action.payload.content;
        blog.author = action.payload.author;
        blog.image = action.payload.image || blog.image;
      }
      saveBlogsToLocalStorage(state.blogs);
    },

    likeBlog: (state, action) => {
      const blog = state.blogs.find(
        (blog) => blog.id === action.payload
      );

      if (blog) {
        blog.likes++;
      }
      saveBlogsToLocalStorage(state.blogs);
    },
  },
});

export const {
  addBlog,
  deleteBlog,
  updateBlog,
  likeBlog,
} = blogSlice.actions;

export default blogSlice.reducer;