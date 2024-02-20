import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
//storeda tutulan veriye eriş
const Hero = () => {
  const store = useSelector((store) => store.movieReducer);
  //1-19 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  //ratgele üretilen sıradaki filme eriş
  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {!randomMovie ? (
        <p>Yükleniyor</p>
      ) : (
        <>
          <div className="grid my-2 ">
            <h1 className="text-center text-xl p-5 mx-2">
              {randomMovie.title}
            </h1>
            <p className="text-justify mx-5">{randomMovie.overview}</p>
            <div className="flex items-center space-x-2 ">
              <span className=" ">IMDB: </span>
              <span className="text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded my-2">
              Filmi İzle
            </button>
            <button className="bg-cyan-700 text-white font-bold py-2 px-4 rounded my-2">
              Listeye Ekle
            </button>
          </div>

          <div className="">
            <img
              className="p-5 "
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
