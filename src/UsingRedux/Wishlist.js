import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuCart from "./MenuCart";
import { useSelector } from "react-redux";

function Wishlist() {
  const wish = useSelector(state => (state.wishUpdate.wish))

  // const remove = (data) => {
  //   let ar = JSON.parse(localStorage.getItem("cart"));
  //   let a = user.Cart.filter((el) => {
  //     return el.id !== data.id;
  //   });
  //   user.handlewishes(a);
  //   ar = ar.filter((el) => {
  //     return el.id !== data.id;
  //   });
  //   localStorage.setItem("cart", JSON.stringify(ar));
  // };

  return (
    <>
      <div>
        <div>
          <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand"
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                🥣Restuarant
              </NavLink>
            </div>
          </nav>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "auto auto",
          }}
        >
          {wish.map((menudata) => {
            return (
              <>
                <MenuCart key={menudata.id*2} menudata={menudata} wishes="0" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
