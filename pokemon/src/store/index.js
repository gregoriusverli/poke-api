import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import pokeReducer from "./reducer/pokeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    pokeReducer: pokeReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
