import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import AddBlogs from "./components/AddBlogs";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import blogReducer from "./redux/blogSlice/blogSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/addblog" element={<AddBlogs />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
