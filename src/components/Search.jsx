const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="user-chat">
        <img src="https://images.pexels.com/photos/953723/pexels-photo-953723.jpeg?auto=compress&cs=tinysrgb&w=300" alt="user" />
        <div className="userChatInfo">
          <span>Jennie</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
