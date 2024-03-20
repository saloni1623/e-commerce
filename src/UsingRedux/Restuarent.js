import React from "react";
import { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./Redux/actions/action";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

function Restuarent() {
  const [menuData, setmenudata] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const cart = useSelector((state) => state.cartUpdate.cart)
  const dispatch = useDispatch()

  const filterItem = (category) => {
    if (category === "All") {
      setmenudata(Menu);
    } else {
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
      setmenudata(updatedList);
    }
  };


  const increment = (data) => {
    let flag = false
    if(cart.length){
      cart.map((el)=>{
        if(el.id === data.id){
          flag = true
          el.quantity = el.quantity+1
        }
      })
      if(!flag){
        cart.push(data)
      }
      dispatch(updateData(cart))
    }
    else{
      dispatch(updateData([data]))
    }

    const a = menuData.filter((el) => {
      if (el.id === data.id ) {
        el.quantity = el.quantity + 1;
      }
      return el;
    });
    setmenudata(a);
  };

  const decrement = (data) => {
    cart.map((element, index)=>{
      if(data.id === element.id && data.quantity != 1){
        element.quantity = data.quantity-1
      }
      else if(data.id === element.id && data.quantity === 1){
        cart.splice(index, 1)
      }
    }
    )
    dispatch(updateData(cart))

    const a = menuData.map((el) => {
      if (el.id === data.id && el.quantity >= 1) {
        el.quantity = el.quantity - 1;
      }
      return el;
    });
    setmenudata(a);
  };

    if (cart.length) {
      cart.map((el) => {
        menuData.map((element) => {
          if (el.id === element.id) {
            return (element.quantity = el.quantity);
          }
        });
      });
    }

  

  return (
    <>
      <div>
        <div>
          <Navbar filterItem={filterItem} menuList={menuList} />
        </div>
        <div style={{height:"400px", background:"url(https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}></div>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "auto auto",
          }}
        >
          {menuData.map((menudata) => {
            return (
              <MenuCard
              key={menudata.id}
                menudata={menudata}
                increment={increment}
                decrement={decrement}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Restuarent;
