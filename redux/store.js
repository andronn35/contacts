import { combineReducers, createStore } from "redux";
import contactsReducer from "./contactsReducer";


let reducers = combineReducers({
  contactsPage: contactsReducer
});

let store = createStore(reducers);

export default store;