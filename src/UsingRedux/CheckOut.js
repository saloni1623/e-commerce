import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddModal from "./AddModal";
import CheckOutMenu from "./CheckOutMenu";

import SavedAdd from "./SavedAdd";

function CheckOut() {
  const cart = useSelector((state) => state.cartUpdate.cart);
  const address = useSelector((state) => state.address.add);
  const [id, setid] = useState();

  const [add, setadd] = useState({
    fullname: "",
    number: "",
    pincode: "",
    state: "",
    house: "",
    road: "",
  });

  let Totalsum = 0;
  let Items = 0;
  let price = 0;
  let discount = 0;

  if (cart.length) {
    cart.map((el) => {
      Items = Items + el.quantity;
      price = price + el.quantity * el.price;
      if (el.discount) {
        discount = discount + el.quantity * ((el.discount * el.price) / 100);
        Totalsum =
          Totalsum + el.quantity * (el.price - (el.discount * el.price) / 100);
      } else {
        Totalsum = Totalsum + el.quantity * el.price;
      }
    });
  }

  const handleInput = (e) => {
    setadd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    setid(id)
    address.map((el) => {
      if (el.id === id) {
        setadd(el.add);
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/cartpage"
            style={{ textDecoration: "none", color: "white" }}
          >
            🥣Restuarant
          </NavLink>
        </div>
      </nav>

      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ background: "white", width: "50%", marginLeft: "10%" }}>
          <div
            className="d-flex justify-content-center align-items-center py-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ cursor: "pointer" }}
          >
            <span
              style={{ width: "100%" }}
              className="shadow-lg p-3 bg-body text-primary"
            >
              + Add a new Address
            </span>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <div style={{ height: "60vh", overflow: "auto" }}>
              {address.length
                ? address.map((el) => {
                    return <SavedAdd handleEdit={handleEdit} element={el} setid={setid}/>;
                  })
                : address.add}
            </div>
          </div>
          <AddModal
            add={add}
            id={id}
            handleInput={handleInput}
            handelSubmit={() => {
              setid(null)
              setadd({
                fullname: "",
                number: "",
                pincode: "",
                state: "",
                house: "",
                road: "",
              });
            }}
          />
        </div>
        <div
          style={{
            width: "30%",
            height: "95vh",
            borderLeft: "1px solid lightgrey",
          }}
        >
          <div
            style={{
              height: "170px",
              borderBottom: "1px solid lightgray",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h4>Price Details</h4>
            <span className="d-flex justify-content-center justify-content-between">
              <span style={{ width: "200px" }}>Price ({Items} Items)</span>
              <span>:</span>
              <span style={{ width: "200px", textAlign: "right" }}>
                ₨ {price}
              </span>
            </span>
            <span className="d-flex justify-content-center justify-content-between">
              <span style={{ width: "200px" }}>Total Discount</span>
              <span>:</span>
              <span
                className="text-success"
                style={{ width: "200px", textAlign: "right" }}
              >
                (-) ₨ {discount.toFixed(2)}
              </span>
            </span>
            <span className="d-flex justify-content-center justify-content-between">
              <span style={{ width: "200px" }}>Total Price</span> <span>:</span>
              <span style={{ width: "200px", textAlign: "right" }}>
                ₨ {Totalsum.toFixed(2)}
              </span>
            </span>
          </div>
          <div
            style={{ height: "72.5vh", overflow: "auto", paddingTop: "10px" }}
          >
            {cart.map((el) => {
              return <CheckOutMenu Menudata={el} />;
            })}
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default CheckOut;
