import { ADDRESS, EDIT_ADD, REMOVE_ADD } from "../actions/types";

const initialAdd = {
    add : [],
};

const addressReducer = (state = initialAdd, action) => {
    switch (action.type) {
        case ADDRESS :
            return {
                add : [...state.add, {
                    add : action.payload.data,
                    id : action.payload.id
                }]
            }

        case REMOVE_ADD : 
            const newlist = state.add.filter((el) => el.id !== action.id) 
            return {
                add : newlist
            }

        case EDIT_ADD :
            const list = state.add.filter((el) => el.id !== action.payload.id)
            list.push(action.payload)
            return {
                add : list
            }
        default : return state
    }
}

export default addressReducer;