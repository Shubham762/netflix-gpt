import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/moviesSlice";



const useUpcomingMovies=()=>{
   // fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
   
    const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this is popular movie",json);
    dispatch(addTvShows(json.results));

  };
  useEffect(()=>{
    getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;