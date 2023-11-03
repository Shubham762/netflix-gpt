import React from 'react'
import MovieCard from './MoviesCard';

const MovieList = ({title,movies}) => {
      console.log("Poster path is ",movies)
    //  console.log("backdrop_path is backdrop_path",movies[0]?.backdrop_path)

  return (
    <div className='px-6'>
         <h1 className='text-2xl font-bold py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
         {movies?.map((item)=>{
            
            return(
                <MovieCard key={item.id} posterPath={item?.backdrop_path}/>
            )
         })}   
        
        </div>
        </div>
       </div>
  )
}

export default MovieList;