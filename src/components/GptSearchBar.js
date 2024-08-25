import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //Search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);
    //make an api call to GPT API and get movie result
    // const gptQuery =
    //   "Act as a movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   "only give me names of 5 movies,comma separated like the example result given ahead,Example Result:Gadar,Sholey,Don,Golmaal,koi mil gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // Actulayy a payment is require for api call so i am using static text for this
    //console.log(gptResults.choices);
    // gptResults.choices=[{
    //   message:{
    //     content:
    //       "Andaz Apna Apna,Hera Pheri,Chupke Chupke,Jane Bhi Do Yaaro,Padosan"

    //   }
    // }]

    console.log("SearchTXT",searchText.current.value);
    if(searchText.current.value){
      const gptResults = {
        choices: [
          {
            message: {
              content:
                "Andaz Apna Apna,Hera Pheri,Chupke Chupke,Jane Bhi Do Yaaro,Padosan",
            },
          },
        ],
      };
      const gptMovies = gptResults.choices[0].message.content.split(",");
      // for each movie i will search in tmdb api
      const eachSearchMovie = gptMovies.map((movie) => searchMovieTMDB(movie));
      //console.log(eachSearchMovie); //this will give [promise,promise,promise bcz for each movies we call async function with wait for response as a result we get promise.
      const tmdbResults=await Promise.all(eachSearchMovie);
      console.log(tmdbResults)
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResults}))
    }

    
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="p-2 m-4 col-span-9"
        />
        <button
          className="px-0 md:px-4 py-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={() => handleGptSearchClick()}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
