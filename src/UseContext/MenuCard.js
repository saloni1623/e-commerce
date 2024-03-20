import React, { useContext } from "react";
import { Usercontext } from "../App";

function MenuCard({ menudata, decrement, increment }) {
  const user2 = useContext(Usercontext);
  let cartflag = false;
  let flag = false;

  if (user2.Cart) {
    user2.Cart.map((el) => {
      if (el.id === menudata.id) {
        cartflag = true;
      }
    });
  }

  if (user2.wishes) {
    user2.wishes.map((el) => {
      if (el.id === menudata.id) {
        flag = true;
      }
    });
  }
  return (
    <>
      <div
        className="card mb-3"
        style={{
          width: "670px",
          height: menudata.discount ? "340px" : "300px",
          marginLeft: "50px",
          marginTop: "50px",
          padding: "0px",
          background: "#faf4e5",
        }}
        key={menudata.id}
      >
        <div className="row g-0">
          <div className="col-md-5">
            {/* <img
              style={{
                height: menudata.discount ? "338px" : "298px",
                width: menudata.discount ? "328px" : "298px",
                borderRadius: "70% 0px",
              }}
              src={menudata.image}
              className="img-fluid rounded-start"
              alt="Food Pic"
            /> */}
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div style={{ height: "190px" }}>
                <h5 className="card-title">{menudata.name}</h5>
                <small className="text-black-50">{menudata.category}</small>

                <p className="card-text">{menudata.description}</p>
              </div>
              <p className="card-text" style={{ marginTop: "5px" }}>
                <small className="text-primary h6">
                  Price: {menudata.price}
                </small>
              </p>
              <p
                className="card-text"
                style={{ display: menudata.discount ? "block" : "none" }}
              >
                <small className="text-success h6">
                  Discounted Price:
                  {menudata.price - (menudata.discount / 100) * menudata.price}
                </small>
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <div
                      className="btn btn-secondary"
                      style={{
                        height: "29px",
                        padding: "0px",
                        marginTop: "8px",
                      }}
                    >
                      <span className="badge text-bg-secondary">
                        <button
                          className="btn"
                          onClick={() => decrement(menudata.id)}
                          style={{
                            padding: "0px",
                            fontSize: ".65rem",
                            marginTop: "0px",
                          }}
                        >
                          ➖
                        </button>
                      </span>
                      <input
                        type="text"
                        value={menudata.quantity}
                        style={{
                          width: "25px",
                          height: "27px",
                          border: "none",
                        }}
                      ></input>
                      <span className="badge text-bg-secondary">
                        <button
                          className="btn"
                          onClick={() => increment(menudata.id)}
                          style={{
                            padding: "0px",
                            fontSize: ".65rem",
                            marginTop: "0px",
                          }}
                        >
                          ➕
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-4"></div>
                  <div className="col-2">
                    <button
                      className="btn"
                      onClick={
                        menudata.quantity != 0
                          ? () => user2.handleCart(menudata)
                          : ""
                      }
                      style={{ fontSize: "1.3rem" }}
                    >
                      {!cartflag ? "🛒" : "⛔"}
                    </button>
                  </div>
                  <div className="col-2">
                    <button
                      onClick={() => user2.handlewishes(menudata)}
                      className="btn"
                      style={{ fontSize: "1.3rem", color: flag ? "red" : "" }}
                    >
                      ❤
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
