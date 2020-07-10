import {createStore} from "redux";
import {habits} from "./reducers/HabitsReducer";
import {user} from "./reducers/UserReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
  habits,
  user
})

export default createStore(reducers);