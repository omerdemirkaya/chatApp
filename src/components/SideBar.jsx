import Chats from "./Chats.jsx";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default SideBar;
