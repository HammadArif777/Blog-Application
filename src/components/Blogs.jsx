import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import BlogItem from "./UI/BlogItem";
function Blogs() {
  const myBlogs = useSelector((state) => state.blogs.blogs);

  // const noBlogs = <p className="text-2xl text-center">No Blogs found yet.</p>;
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div className="w-3/4 p-5">
          <h1 className="text-4xl text-center font-bold">Current Blogs</h1>
          <div>
            {myBlogs &&
              myBlogs.map((blog) => (
                <BlogItem
                  key={blog.id}
                  title={blog.title}
                  text={blog.text}
                  date={blog.date}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
