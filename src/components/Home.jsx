import Login from "./Login";
import SideBar from "./SideBar";

function Home() {
  return (
    <>
      <div className="w-full flex flex-row relative">
        <SideBar />
        <div className="w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Login />
        </div>
      </div>
    </>
  );
}

export default Home;
