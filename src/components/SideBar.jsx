import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { BiHomeAlt, BiBookOpen, BiAddToQueue } from "react-icons/bi";
import { useSelector } from "react-redux";
function SideBar() {
  const user = useSelector((state) => state.user.name);
  const theBlogs = useSelector((state) => state.blogs.blogs);

  return (
    <>
      <div className="w-[200px] h-screen rounded bg-slate-800 p-5">
        <ul className="w-full flex flex-col items-center justify-center space-y-10 text-white">
          <li
            className={`rounded p-1 transition-all w-full flex flex-row space-x-2 justify-center
          ${user === "Sign in" ? "" : "bg-green-500"}`}
          >
            <span>
              <FaUser />
            </span>
            <span>{user && user}</span>
          </li>
          <li className="transition-all hover:bg-white hover:text-slate-800 justify-center w-full text-white text-center flex flex-row items-center space-x-2 p-1 rounded">
            <BiHomeAlt />
            <Link to={"/"}>Home</Link>
          </li>
          <li className="group transition-all hover:bg-white hover:text-slate-800 justify-center w-full text-white flex flex-row items-center space-x-2 p-1 rounded">
            <BiBookOpen />
            <Link to={"/blogs"}>
              Blogs{" "}
              <span className="group-hover:text-white rounded-full bg-red-600 px-2">
                {theBlogs.length}
              </span>
            </Link>
          </li>
          <li className="transition-all hover:bg-white hover:text-slate-800 justify-center w-full text-white flex flex-row items-center space-x-2 p-1 rounded">
            <BiAddToQueue />
            <Link to={"/addblog"}>Add New Blog</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
