//import { useEffect, useState } from "react";
//import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
//import { addTrailerVideo } from "../utils/moviesSlice";
const VideoBackground = ({ movieId }) => {
    const autoplayvideo= "?&autoplay=1&mute=1"
    const trailerMovie =useSelector((store) => store?.movies?.trailerVideo);

     useMovieTrailer(movieId);
    {/* Here again i have extracted the code from here and made a custom hook useMovieTrailer*/}
//     const dispatch=useDispatch();
//   // const [trailerId,setTrailerId]=useState(''); // this is to make key of trailer dinamic in youtube key but we impliment by redux store
//   //fetch video trailer
//   const getMoviesVideos = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     console.log("movietrailer find", json.results);
//     const trailerdata = json.results.filter((item) => item.type === "Trailer");
//     // console.log(trailer)   this out put is having 2 movie trailer so i have to take one
//     const trailer = trailerdata.length ? trailerdata[0] : json.results[0];
//     console.log(trailer.key);
//     dispatch(addTrailerVideo(trailer));
//     // setTrailerId(trailer.key);
//       console.log("trailerMovie",trailerMovie) 
//   };
//   useEffect(() => {
//     getMoviesVideos();
//   }, []);

  return (
    <div className="w-screen">
      {/*  this is the code from embaded youtube after click on share then click embaded */}
      {/* {console.log("this is trailer link    " +
        `https://www.youtube.com/embed/${trailerMovie?.key}?si=AOdO_X3hlP4qziD7${autoplayvideo}`
      )} */}
      <iframe
     className="w-screen aspect-video"
       // src="https://www.youtube.com/embed/X4d_v-HyR4o?si=AOdO_X3hlP4qziD7"
      //  src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=AOdO_X3hlP4qziD7${autoplayvideo}`}
        src={"https://www.youtube.com/embed/"+trailerMovie?.key+"?si=AOdO_X3hlP4qziD7"+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
