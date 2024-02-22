import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../Redux/actions/movieActions";
import Hero from "../components/Hero";
import { getGenres } from "../Redux/actions/genreActions";
import genreReducer from "../Redux/Reducers/genreReducer";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
const MainPage = () => {
  //genrereducer a abone ol
  const genreState = useSelector((store) => store.genreReducer);

  const dispatch = useDispatch();

  //Api den populer filmleri al ve store a aktar
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  //hero ve movi listi component olarak tanıttık
  return (
    <div>
      <Hero />
      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError} </p>
      ) : (
        genreState.genres.map((genre) => (
          //genreyi prop olarak gönderdik
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
