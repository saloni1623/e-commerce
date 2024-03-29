import { createStore } from "redux";
import rootreducer from './reducers/index'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "Cart",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootreducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persister = persistStore(store)

export default store;