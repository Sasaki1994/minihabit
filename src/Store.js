import { createStore, compose, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { habits } from "./reducers/HabitsReducer";
import { user } from "./reducers/UserReducer";
import { modal } from "./reducers/ModalReducer";
import { records } from "./reducers/RecordsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  habits,
  user,
  modal,
  records,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), devToolsEnhancer({}))
);
sagaMiddleware.run(rootSaga);
export default store;
