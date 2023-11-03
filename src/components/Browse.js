// import React, { useEffect } from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvShows from "../hooks/useTvShows";
import useLatesTvShows from "../hooks/useLatestTvShow";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/moviesSlice";


const Browse = () => {
     useNowplayingMovies();   //this custom hook is replaced by below code
     usePopularMovies();   //custom hook for fetching popular movies data
     useTopRatedMovies();   //custom hook for fetching top rated movies data
     useUpcomingMovies();      //custom hook for fetching upcoming movies data
     useTvShows();            //custom hook for fetching TV SHOWS
     useLatesTvShows();
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
