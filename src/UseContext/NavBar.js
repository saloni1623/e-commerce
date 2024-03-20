import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Usercontext } from "../App";

const Navbar = ({ filterItem, menuList }) => {
  const user = useContext(Usercontext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            🥣Restuarant
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {menuList.map((menuElem) => {
                return (
                  <button className="btn" onClick={() => filterItem(menuElem)}>
                    {menuElem}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="btn btn-primary">
            <NavLink
              to="/cartpage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cart
              <span class="badge bg-secondary" style={{ marginLeft: "5px" }}>
                {user.Cart.length}
              </span>
            </NavLink>
          </button>
          <button className="btn btn-primary">
            <NavLink
              to="/wishlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              wishlist
            </NavLink>
            <span class="badge bg-secondary" style={{ marginLeft: "5px" }}>
              {user.wishes.length}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
