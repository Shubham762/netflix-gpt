import { PageImage } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
  return (
    <div>
       <div className="absolute -z-10">
        <img
          src={PageImage}
          alt="Nteflixlogo"
        />
      </div>
       <GptSearchBar />
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;