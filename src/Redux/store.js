import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./Reducers/movieReducer";

const rootReducer = combineReducers({
  movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
