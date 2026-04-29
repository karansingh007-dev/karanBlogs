import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";

// Configure store
const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

// Save to localStorage whenever state changes
store.subscribe(() => {
  localStorage.setItem(
    "blogs",
    JSON.stringify(store.getState().blogs.blogs)
  );
});

export default store;