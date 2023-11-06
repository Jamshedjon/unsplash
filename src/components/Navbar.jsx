import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { likedPhotos } = useSelector((state) => state.img);
  return (
    <nav className="flex justify-between">
      <NavLink to="/">
        <h1>Unsplash</h1>
      </NavLink>
      <div className=" flex gap-5 items-center">
        <NavLink className="  btn btn-outline " to="/">
          Home
        </NavLink>
        <NavLink className="  btn btn-outline " to="/about">
          About
        </NavLink>
        <NavLink className="  btn btn-outline " to="/contact">
          Contact
        </NavLink>
        <NavLink className="  btn btn-outline " to="/login">
          Login
        </NavLink>
        <NavLink className="  btn btn-outline " to="/likedPhotos">
          LikedPhotos
          <span className="badge badge-secondary">{likedPhotos.length}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
