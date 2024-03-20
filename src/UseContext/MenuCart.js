import React from "react";

function MenuCart({ menudata }) {
  return (
    <>
      <div
        className="card mb-3"
        style={{
          height: "150px",
          padding: "0px",
          width: "600px",
          marginLeft: "90px",
        }}
      >
        <div className="row">
          <div className="col-md-4">
            {/* <img
              src={menudata.image}
              style={{
                borderRadius: "70% 0px",
                height: "148px",
                width: "148px",
              }}
              className="img-fluid rounded-start"
              alt="..."
            /> */}
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{menudata.name}</h5>
              <p className="card-text">
                <small className="text-muted">Price: {menudata.price}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Discounted Price:{" "}
                  {menudata.price - (menudata.discount / 100) * menudata.price}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  No. of Items: {menudata.quantity}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCart;
