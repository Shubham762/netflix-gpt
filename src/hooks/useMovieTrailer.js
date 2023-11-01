import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();
   
    const getMoviesVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
     //  console.log("movietrailer find", json.results);
      const trailerdata = json.results.filter((item) => item.type === "Trailer");
      // console.log(trailer)   this out put is having 2 movie trailer so i have to take one
      const trailer = trailerdata.length ? trailerdata[0] : json.results[0];
      //console.log(trailer.key);
      dispatch(addTrailerVideo(trailer));
      // setTrailerId(trailer.key);
      //  console.log("trailerMovie",trailer.key) 
    };
    useEffect(() => {
      getMoviesVideos();
    }, []);

}

export default useMovieTrailer;