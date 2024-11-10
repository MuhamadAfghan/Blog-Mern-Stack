import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./HomeReducer";

const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
