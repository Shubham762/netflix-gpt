import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  // console.log("Movie list",movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-44 pl-6 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Tv Shows"} movies={movies.tvShows}/>
      <MovieList title={"Latest Tv Shows"} movies={movies.latestTvShows}/>
      </div>
      </div>
    )
  )
}

export default SecondaryContainer;







