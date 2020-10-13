import React, { useState } from "react";
import "../views/Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon></MenuSharpIcon>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          ></img>
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        ></input>
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton"></SearchSharpIcon>
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon"></VideoCallSharpIcon>
        <AppsSharpIcon className="header__icon"> </AppsSharpIcon>
        <NotificationsSharpIcon className="header__icon"></NotificationsSharpIcon>
        <Avatar
          alt="Le Man"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;
