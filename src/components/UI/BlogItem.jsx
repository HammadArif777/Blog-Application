import { useState } from "react";
import { useSelector } from "react-redux";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
function BlogItem({ title, text, date }) {
  const user = useSelector((state) => state.user.name);
  const [show, setShow] = useState(false);
  const toggle = () => {
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  };
  return (
    <>
      <div>
        <div className="rounded shadow-lg flex flex-row items-center justify-between p-5 bg-slate-800 text-white">
          <div className="text-white">{title}</div>
          <div>
            <button
              className="bg-white rounded-full transition-all text-black active:opacity-75 active:scale-[1.27]"
              onClick={toggle}
            >
              {show ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </div>
        </div>
        <div className="transition-all my-5 p-5 shadow-lg rounded">
          <p className="transition border-b-2">{show && text}</p>
          <div className="flex flex-row items-center justify-between text-sm italic">
            <div>
              <strong>Dated:</strong> {date}
            </div>
            <div>
              <strong>Author:</strong> &quot;{user}&quot;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
