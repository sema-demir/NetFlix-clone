import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  //herbir kategori için istek at kategorilerin Id sine göre
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">{genre.name} </h1>
      <Splide
        options={{
          autoWidth: true,
          rewind: true,
          width: 800,
          gap: "10px",
        }}
        aria-label="Movies"
      >
        {movies?.map((movie) => (
          <SplideSlide>
            <img
              className="max-w-[300px] h-full cursor-pointer"
              src={baseImgUrl + movie.poster_path}
              alt={movie.title}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
