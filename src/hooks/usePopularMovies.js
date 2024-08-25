import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";



const usePopularMovies=()=>{
   
    const dispatch = useDispatch();
    const popularMovies = useSelector(
      (store) => store.movies.popularMovies  // checking wherether popular movies is available in store or not
    ); 
  const getPopularMovies = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await moviedata.json();
   // console.log("this is popular movie",json);
    dispatch(addPopularMovies(json.results));

  };
  useEffect(()=>{
    !popularMovies && getPopularMovies();
  },[])
}

export default usePopularMovies;