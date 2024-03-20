import { ADD_CART, REMOVE_DATA, ADD_WISH, REMOVE_WISH, INCR_NUM, DCR_NUM, ADDRESS, REMOVE_ADD, EDIT_ADD   } from "./types";


export const updateData = (payload) => {

 return{
   type : ADD_CART,
   payload: payload
 }
};

export const removeData = (id) => {

  return{
    type : REMOVE_DATA,
    id: id
  }
 };
 
 export const updatewish = (payload) => {

  return{
    type : ADD_WISH,
    payload: payload
  }
 };

 export const removeWishes = (id) => {

  return{
    type : REMOVE_WISH,
    id: id
  }
 };

export const address = (data, id) => {
  return{
    type : ADDRESS,
    payload : {
      data : data,
      id : id ? id : new Date().getTime().toString() 
    }
  }
}

export const Removeaddress = (id) => {
  return {
    type : REMOVE_ADD,
    id : id
  }
}

export const editAddress = (payload) => {
  return {
    type : EDIT_ADD,
    payload : payload
  }
}
 
