import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import accountReducer from "./account-reducer";
import cartReducer from "./cart-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  account: accountReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, reducers);
