import { combineReducers } from "redux";
import cartReducer from './cartReducer'
import wishReducer from "./wishReducer";
import addressReducer from "./Address";

const rootreducer = combineReducers({
    cartUpdate : cartReducer,
    wishUpdate : wishReducer,
    address : addressReducer
})

export default rootreducer;