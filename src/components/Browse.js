// import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/moviesSlice";


const Browse = () => {
     useNowplayingMovies();   //this custom hook is replaced by below code

  //fetch data from TMDB API and UPdate the store   taking this logic of api calling inside useNowPlayingMovies HOOKS(custom hooks)

  // const dispatch = useDispatch();
  // const getNowPlaingMovie = async () => {
  //   const moviedata = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTIONS
  //   );
  //   const json=await moviedata.json();      
  //   console.log("this is movie",json);
  //   dispatch(addNowPlayingMovies(json.results));

  // };
  // useEffect(()=>{
  //   getNowPlaingMovie();
  // },[])
  return (
    <div>
      {
        /*   
              Main Container 
                -Video backgroung
                -video Title
              Secondary container
              -Movielist*n
              movie cards*n  
        */
      }
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
