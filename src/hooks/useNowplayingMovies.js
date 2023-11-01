import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";



const useNowplayingMovies=()=>{
   
    const dispatch = useDispatch();
  const getNowPlaingMovie = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this is movie",json);
    dispatch(addNowPlayingMovies(json.results));

  };
  useEffect(()=>{
    getNowPlaingMovie();
  },[])
}

export default useNowplayingMovies;