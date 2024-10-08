import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer =()=>{
    const movies=useSelector(store =>store.movies?.nowPlayingMovies);
   //if(movies===null) return;
    if(!movies) return;

    const mainMovies=movies[0];
    const { original_title,overview,id}=mainMovies;
    // console.log("this is now playing movies",mainMovies)
return(
    <div className="pt-[30%] md:pt-0 bg-black">
        <VideoTitle title={original_title} overview={overview}/>
        
     <VideoBackground movieId={id}/>
     
    </div>
)
}

export default MainContainer;