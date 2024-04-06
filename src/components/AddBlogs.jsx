import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "../redux/blogSlice/blogSlice";
import SideBar from "./SideBar";
function AddBlogs() {
  const titleBox = useRef(null);
  const dispatch = useDispatch();
  const theBlogs = useSelector((state) => state.blogs);
  useEffect(() => {
    titleBox.current.focus();
  }, []);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      text: text,
      title: title,
      date: date,
    };
    dispatch(addBlog(obj));
    console.log(theBlogs);
    setTitle("");
    setText("");
    setDate("");
  };
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <form
          className="p-5 w-3/4 flex flex-row flex-wrap"
          onSubmit={submitHandler}
        >
          <h1 className="text-2xl">+New Blog</h1>
          <div className="w-full shadow-lg rounded-lg">
            <div className="items-center flex flex-row space-x-2">
              <label
                className="border-b-[3px] border-b-slate-800"
                htmlFor="title"
              >
                Title
              </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                ref={titleBox}
                className="rounded border-2 focus:outline-slate-500"
                type="text"
              />
              <label
                htmlFor="date"
                className="border-b-[3px] border-b-slate-800"
              >
                Date:
              </label>
              <input
                onChange={(event) => setDate(event.target.value)}
                type="date"
                className="p-1"
              />
            </div>
            <textarea
              onChange={(event) => setText(event.target.value)}
              value={text}
              className="focush:outline-slate-500 border-2 p-1 w-full"
              cols="30"
              rows="10"
              placeholder="Start writing from here..."
            ></textarea>
            <input
              className="bg-slate-800 text-white px-2 py-1 rounded transition-all active:opacity-75 shadow-lg hover:cursor-pointer"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBlogs;
