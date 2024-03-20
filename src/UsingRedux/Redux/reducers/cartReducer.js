import { ADD_CART } from "../actions/types";
import { REMOVE_DATA } from "../actions/types";

const initialCart = {
  cart: [],
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cart: action.payload
      }

      case REMOVE_DATA:
        const newlist = state.cart.filter((el)=>{
          return el.id != action.id
        })
        return {
          ...state,
          cart: newlist
      }

    default:
      return state;
  }
};
export default cartReducer;
