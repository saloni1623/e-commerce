import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData, removeData, updatewish, removeWishes } from "./Redux/actions/action";



function MenuCard({ menudata, decrement, increment }) {
 const dispatch = useDispatch()
 const cart = useSelector((state) => state.cartUpdate.cart)
 const wish = useSelector((state) => state.wishUpdate.wish)

  let cartflag = false;
  let flag = false;
  if (cart.length) {
    cart.map((el) => {
      if (el.id === menudata.id) {
        cartflag = true;
        // menudata.quantity = el.quantity;
      }
    });
  }

  if (wish) {
    wish.map((el) => {
      if (el.id === menudata.id) {
        flag = true;
      }
    });
  }

  const handleCart = () => {
    let flag = true
    cart.map((el)=>{
      if(el.id === menudata.id){
        flag = false
      }
    })
    flag ? dispatch(updateData(menudata)) : dispatch(removeData(menudata.id))
  }

  const handlewishes = () => {
    let flag = true
    wish.map((el)=>{
      if(el.id === menudata.id){
        flag = false
      }
    })
    flag ? dispatch(updatewish(menudata)) : dispatch(removeWishes(menudata.id))
  }
  
  return (
    <>
      <div
        className="card mb-3"
        style={{
          width: "670px",
          height:  "340px" ,
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
                  Price: ₨ {menudata.price}
                </small>
              </p>
              <p
                className="card-text"
              >
                <small className="text-success h6">
                  Discounted Price:
                  ₨ {menudata.discount ? menudata.price - (menudata.discount / 100) * menudata.price : 0}
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
                        display:"flex",

                      }}
                    >
                      <span className="badge text-bg-secondary">
                        <button
                          className="btn"
                          onClick={() => decrement(menudata)}
                          style={{
                            padding: "0px",
                            fontSize: ".65rem",
                            marginTop: "0px",
                            
                          }}
                        >
                          ➖
                        </button>
                      </span>
                      <div
                        type="text"
                        style={{
                          width: "35px",
                          height: "27px",
                          
                        }}
                        >
                          {menudata.quantity}
                        </div>
                      <span className="badge text-bg-secondary">
                        <button
                          className="btn"
                          onClick={() => increment(menudata)}
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
                  <div className="col-2"></div>
                  <div className="col-2">
                    <button
                      onClick={handlewishes}
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
