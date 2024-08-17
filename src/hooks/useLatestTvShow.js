//fetch('https://api.themoviedb.org/3/tv/latest', options)

//fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addLatestTvShows } from "../utils/moviesSlice";



const useLatesTvShows=()=>{
   // fetch('https://api.themoviedb.org/3/tv/latest&page=1', options)
   
    const dispatch = useDispatch();
  const getLatestTvShows = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this isLatest Shows",json);
    dispatch(addLatestTvShows(json.results));

  };
  useEffect(()=>{
    getLatestTvShows();
  },[])
}

export default useLatesTvShows;


