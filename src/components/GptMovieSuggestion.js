import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gptMoviesfromStore=useSelector(store=>store.gpt);
  const {movieResult,movieNames}=gptMoviesfromStore;
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-75'>
      <div>
        {
          movieNames.map((movie,index)=>{
            return(
              <MovieList key={movie} title={movie} movies={movieResult[index]}/>
            )
          })
        }
        
        </div>
      </div>
  )
}

export default GptMovieSuggestion;