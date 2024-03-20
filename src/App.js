import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./UseContext/CartPage";
import Restuarent from "./UseContext/Restuarent";
import Wishlist from "./UseContext/Wishlist";

export const Usercontext = React.createContext();

function AppContext() {
  const [cart, setcart] = useState([]);
  const [wishes, setwishes] = useState([]);

  const getCart = () => {
    let ar = JSON.parse(localStorage.getItem("cart"));
    if (ar) {
      setcart(ar);
    } else {
      setcart([]);
    }
  };
  const getwishes = () => {
    let ar = JSON.parse(localStorage.getItem("wishes"));
    if (ar) {
      setwishes(ar);
    } else {
      setwishes([]);
    }
  };

  useEffect(() => {
    getCart();
    getwishes();
  }, []);

  let handleCart = (data) => {
    var flag = true;
    let ar = JSON.parse(localStorage.getItem("cart"));
    var i = 0;
    var j = 0;
    cart.map((el) => {
      if (el.id == data.id) {
        flag = false;
        j = i;
      }
      i = i + 1;
    });
    if (ar) {
      if (flag) {
        ar.push(data);
      } else {
        ar.splice(j, 1);
      }
    } else {
      ar = [data];
    }
    setcart(flag ? [...cart, data] : ar);

    localStorage.setItem("cart", JSON.stringify(ar));
  };

  const handlewishes = (data) => {
    var flag = true;
    let ar = JSON.parse(localStorage.getItem("wishes"));
    var i = 0;
    var j = 0;
    wishes.map((el) => {
      if (el.id == data.id) {
        flag = false;
        j = i;
      }
      i = i + 1;
    });
    if (ar) {
      if (flag) {
        ar.push(data);
      } else {
        ar.splice(j, 1);
      }
    } else {
      ar = [data];
    }
    setwishes(flag ? [...wishes, data] : ar);

    localStorage.setItem("wishes", JSON.stringify(ar));
  };
  let cartItem = {
    Cart: cart,
    handleCart: handleCart,
    wishes: wishes,
    handlewishes: handlewishes,
  };

  return (
    <>
      <Usercontext.Provider value={cartItem}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Restuarent />} />
            <Route exact path="/cartpage" element={<Cart />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
      </Usercontext.Provider>
    </>
  );
}
export default AppContext;
