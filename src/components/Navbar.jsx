const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Chat app</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/953723/pexels-photo-953723.jpeg?auto=compress&cs=tinysrgb&w=300" alt="user" />
          <span>Ömer</span>
          <button>Logout</button>
        </div>
    </div>
  );
}

export default Navbar;
