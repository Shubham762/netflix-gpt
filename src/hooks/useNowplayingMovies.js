import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies  // checking wherether nowplaying movies is available in store or not
  ); 
  const getNowPlaingMovie = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await moviedata.json();
    // console.log("this is movie",json);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) {
      // if not available then call api and get value of nowPlayingMovies else no need to call api agai and agai thats why if condition is used this is the concept of memoization in react
      getNowPlaingMovie();
    }

    //above condition iss also written as below
     
    // !nowPlayingMovies && getNowPlaingMovie();


  }, []);
};

export default useNowplayingMovies;
