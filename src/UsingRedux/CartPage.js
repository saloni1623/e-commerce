import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./menuApi";
import MenuCart from "./MenuCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const cart = useSelector(state => (state.cartUpdate.cart))
  let Totalsum = 0
  let Items = 0
  let price = 0
  let discount = 0

  if(cart.length){
    console.log("yes")
    cart.map((el)=>{
      Items = Items + el.quantity
      price = price + (el.quantity * el.price)
      if(el.discount){
        discount = discount + el.quantity * (el.discount * el.price / 100)
        Totalsum = Totalsum + el.quantity * (el.price - (el.discount * el.price/100))
      }
      else{
        Totalsum = Totalsum + el.quantity * el.price
      }
    })
    
  }

  return (
    <>
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
        <div>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "auto auto",
            marginBottom:"50px"
          }}
        >
          {cart.map((menudata) => {
            return (
              <>
                <MenuCart key={menudata.id} menudata={menudata} />
              </>
            );
          })}
          
        </div>
        <div style={{display:"flex", justifyContent:"center", justifyContent:"space-evenly", alignItems:"center", width:"100%" , background:"#d0e5fc", padding:"50px"}}>
            <div style={{padding:"20px", background:"white", fontSize:"1rem", borderRadius:"10px", width:"500px"}}>
              <div style={{height:"170px", borderBottom:"1px solid lightgray", marginBottom:"30px", padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <h4>Price Details</h4>
                <span className="d-flex justify-content-center justify-content-between"><span style={{width:"200px"}}>Price ({Items} Items)</span><span>:</span><span style={{width:"200px", textAlign:"right"}}> ₨ {price}</span></span>
                <span className="d-flex justify-content-center justify-content-between"><span style={{width:"200px"}}>Total Discount</span> <span>:</span> <span className="text-success" style={{width:"200px", textAlign:"right"}}>(-) ₨ {discount}</span></span>
                <span className="d-flex justify-content-center justify-content-between"><span style={{width:"200px"}}>Total Price</span> <span>:</span> <span style={{width:"200px", textAlign:"right"}}> ₨ {Totalsum.toFixed(2)}</span></span>
              </div> 
              <NavLink to="/checkout"><button style={{padding:"10px", fontSize:"1.2rem", borderRadius:"1x0px", width:"100%"}} className="btn btn-outline-primary">checkout</button></NavLink>
            </div>           
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
