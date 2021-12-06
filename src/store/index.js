import { combineReducers, createStore } from "redux";
import mainData from "./mainData";
const rootReducer = combineReducers({
    mainData: mainData
})
const store = createStore(rootReducer)
export default store;