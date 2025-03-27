
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import avatarLogo from "../assets/avatar.png";

const Notebar = ({ onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) setUser(storedUser);
    }, []);
  

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="bg-[#f23064] text-white flex items-center justify-between px-6 py-3 shadow-lg">
      {/* Brand Logo */}
      <Link to={"/"} className="flex items-center gap-2">
        <h2 className="text-2xl font-bold tracking-wide">
          <span className="text-white">FocusFlow</span>
          <span className="text-gray-200">Notes</span>
        </h2>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-white text-gray-700 px-3 py-2 rounded-full shadow-sm w-[300px]">
        <FaSearch className="text-[#f23064] mr-2" />
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        {searchQuery && (
          <button onClick={onClearSearch}>
            <MdClear className="text-gray-500 hover:text-red-500 text-lg" />
          </button>
        )}
      </div>

        <div className="flex items-center space-x-4">
        <p className="font-semibold text-lg mr-2">Welcome {user.username}</p>
        <img src={avatarLogo} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
        </div>
    </div>
  );
};

export default Notebar;
