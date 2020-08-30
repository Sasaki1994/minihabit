import { createStore } from "redux";
import { habits } from "./reducers/HabitsReducer";
import { user } from "./reducers/UserReducer";
import { modal } from "./reducers/ModalReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  habits,
  user,
  modal,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
