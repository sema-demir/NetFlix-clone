import { actionTypes } from "./actionTypes";

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
};

//aciton yazmadık cunku type ve payload olarak daha kısa yazmak için
const genreReducer = (state = initialState, { type, payload }) => {
  switch (
    type //action.type yazmak yerine sadece type yazdık
  ) {
    //kategoriler yuklneiyor bas
    case actionTypes.GENRES_LOADING:
      return { ...state, isLoading: true };
    //hata durumunda
    case actionTypes.GENRES_ERROR:
      return { ...state, isLoading: false, isError: payload };

    case actionTypes.GENRES_SUCCESS:
      return { ...state, isLoading: false, isError: false, genres: payload };

    default:
      return state;
  }
};
export default genreReducer;
