import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Usercontext } from "../App";
import MenuCart from "./MenuCart";

function Wishlist() {
  const user = useContext(Usercontext);

  const remove = (data) => {
    let ar = JSON.parse(localStorage.getItem("cart"));
    let a = user.Cart.filter((el) => {
      return el.id !== data.id;
    });
    user.handlewishes(a);
    ar = ar.filter((el) => {
      return el.id !== data.id;
    });
    localStorage.setItem("cart", JSON.stringify(ar));
  };

  return (
    <>
      <div>
        <div>
          <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
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
          {user.wishes.map((menudata) => {
            return (
              <>
                <MenuCart menudata={menudata} removed={remove} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
