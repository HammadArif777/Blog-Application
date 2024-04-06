import "animate.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice";
function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(userName));
    setUserName("");
    setPass("");
  };
  return (
    <>
      <h1 className="text-center text-4xl w-1/2 mx-auto font-extrabold text-slate-800">
        Blogger..
      </h1>
      <form
        onSubmit={submitHandler}
        className="mx-auto w-1/2 flex flex-col p-5 rounded-lg shadow-lg space-y-10"
        action=""
      >
        <div className="w-full flex flex-row space-x-2">
          <label htmlFor="username">Username </label>
          <input
            onChange={(event) => setUserName(event.target.value)}
            className="focus:outline-slate-500 text-xl w-3/4 rounded border"
            type="text"
            value={userName}
          />
        </div>
        <div className=" flex flex-row space-x-2">
          <label htmlFor="password">Password </label>
          <input
            onChange={(event) => setPass(event.target.value)}
            className="focus:outline-slate-500 text-xl w-3/4 rounded border"
            type="password"
            autoComplete="auto"
            value={pass}
          />
        </div>
        <div className=" flex flex-row space-x-2">
          <input
            className="px-2 py-1 rounded bg-slate-800 text-white"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </>
  );
}

export default Login;
