import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtopRatedMovies } from "../utils/moviesSlice";



const useTopRatedMovies=()=>{
    // fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(
      (store) => store.movies.topRatedMovies  // checking wherether topRated movies is available in store or not
    ); 
    
  const getTopRatedMovies = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this is popular movie",json);
    dispatch(addtopRatedMovies(json.results));

  };
  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;