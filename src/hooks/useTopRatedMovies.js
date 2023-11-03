import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtopRatedMovies } from "../utils/moviesSlice";



const useTopRatedMovies=()=>{
    // fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   
    const dispatch = useDispatch();
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
    getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;