import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./Reducers/movieReducer";
import genreReducer from "./Reducers/genreReducer";

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
