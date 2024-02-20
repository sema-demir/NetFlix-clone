import axios from "axios";
import { options } from "../../constants";
import { actionTypes } from "../Reducers/actionTypes";

export const getPopular = () => (dispatch) => {
  //yuklnme durumunu Reducer a bildir
  dispatch({ type: actionTypes.MOVIES_LOADING });

  //Api den popular verileri al
  //basarısız olursa Reducer a bildir
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((res) =>
      //basarılı olursa Reducer a bildir
      dispatch({
        type: actionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
