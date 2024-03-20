import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./UsingRedux/CartPage";
import Restuarent from "./UsingRedux/Restuarent";
import store,{persister} from "./UsingRedux/Redux/store";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import Wishlist from "./UsingRedux/Wishlist";
import CheckOut from "./UsingRedux/CheckOut";

function App_Redux() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Restuarent />} />
            <Route exact path="/cartpage" element={<Cart />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/checkout" element={<CheckOut />} />
          </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App_Redux;
