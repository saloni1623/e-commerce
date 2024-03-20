import React from "react";
import { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./NavBar";
import { useEffect } from "react";

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

  const increment = (id) => {
    let ar = JSON.parse(localStorage.getItem("cart"));
    if (ar) {
      ar.map((el) => {
        if (el.id === id) {
          return (el.quantity = el.quantity + 1);
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(ar));
    const a = menuData.filter((el) => {
      if (el.id === id) {
        el.quantity = el.quantity + 1;
      }
      return el;
    });
    setmenudata(a);
  };
  const decrement = (id) => {
    let ar = JSON.parse(localStorage.getItem("cart"));
    if (ar) {
      ar.map((el) => {
        if (el.id === id && el.quantity > 0) {
          el.quantity = el.quantity - 1;
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(ar));
    const a = menuData.map((el) => {
      if (el.id === id && el.quantity > 1) {
        el.quantity = el.quantity - 1;
      }
      return el;
    });
    setmenudata(a);
  };

  const getCart = () => {
    let ar = JSON.parse(localStorage.getItem("cart"));
    if (ar) {
      ar.map((el) => {
        menuData.map((element) => {
          if (el.id === element.id) {
            return (element.quantity = el.quantity);
          }
        });
      });
    }
  };

  useEffect(() => {
    getCart();
  }, []);

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
