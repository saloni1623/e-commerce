import { ADD_WISH } from "../actions/types";
import { REMOVE_WISH } from "../actions/types";

const initialCart = {
  wish: [],
};

const wishReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_WISH:
      return {
        ...state,
        wish: [
          ...state.wish,
          action.payload
        ]
      }

      case REMOVE_WISH:
        const newlist = state.wish.filter((el)=>{
          return el.id != action.id
        })
        return {
          ...state,
          wish: newlist
      }

    default:
      return state;
  }
};
export default wishReducer;
