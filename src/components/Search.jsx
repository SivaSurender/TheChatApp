import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find your buddy " />
      </div>
      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user-chat-info">
          <span>Test two</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
