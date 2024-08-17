//fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";



const useTvShows=()=>{
   // fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
   
    const dispatch = useDispatch();
  const getTvShows = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this is TV SHOWS",json);
    dispatch(addUpcomingMovies(json.results));

  };
  useEffect(()=>{
    getTvShows();
  },[])
}

export default useTvShows;