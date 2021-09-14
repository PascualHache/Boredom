import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBarBox, NavBarSpacer } from "./NavBar.style";
import { BsChevronDown } from "react-icons/bs";
import Logo from "../Logo/Logo";

export default function NavBar({ toogleFavsView }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("userName");
    setOpen(false);
    history.push("/login");
  };

  const handleFavourites = () => {
    toogleFavsView();
    setOpen(false);
  };

  const toogleDropdown = () => {
    setOpen(!open);
  };

  return (
    <NavBarBox>
      <Logo />
      <NavBarSpacer> Choose a task to escape boredom</NavBarSpacer>

      <div>
        <button onClick={toogleDropdown}>
          <BsChevronDown />
        </button>
        {open && (
          <div>
            <a onClick={handleFavourites}>Show Favourites</a>
            <a onClick={handleLogOut}>Log Out</a>
          </div>
        )}
      </div>
    </NavBarBox>
  );
}
