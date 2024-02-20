import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopular } from "../Redux/actions/movieActions";
import Hero from "../components/Hero";
const MainPage = () => {
  const dispatch = useDispatch();
  //Api den populer filmleri al ve store a aktar
  useEffect(() => {
    dispatch(getPopular());
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MainPage;
