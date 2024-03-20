import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Navbar = ({ filterItem, menuList }) => {
  const cart = useSelector((state) => state.cartUpdate.cart)
  const wish = useSelector((state) => state.wishUpdate.wish)
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
                  <button key={menuElem} className="btn" onClick={() => filterItem(menuElem)}>
                    {menuElem}
                  </button>
                );
              })}
            </div>
          </div>
          <NavLink
              to="/cartpage"
              style={{ textDecoration: "none", color: "white" }}
            >
          <button className="btn btn-primary">
            
              Cart
              <span className="badge bg-secondary" style={{ marginLeft: "5px" }}>
                {cart.length}
              </span>
          </button>
            </NavLink>
            <NavLink
              to="/wishlist"
              style={{ textDecoration: "none", color: "white" }}
            >
          <button className="btn btn-primary">
            
              wishlist
            <span className="badge bg-secondary" style={{ marginLeft: "5px" }}>
              {wish.length}
            </span>
          </button>
            </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
