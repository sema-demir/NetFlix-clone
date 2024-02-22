//kategori verileri al ve reducer a kaydet

import axios from "axios";
import { actionTypes } from "../Reducers/actionTypes";
import { options } from "../../constants";

//thunk askiyonunun diğerlerinden farkı bir fonksiyonu calıstırır ve return eder
export const getGenres = () => (dispatch) => {
  //api istegini reducer a haber ver
  dispatch({ type: actionTypes.GENRES_LOADING });

  //api istegi at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    //veri gelirse reducera haber ver
    .then((res) =>
      dispatch({ type: actionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )

    //hata olursa reducer a haber ver
    .catch((err) =>
      dispatch({
        type: actionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
