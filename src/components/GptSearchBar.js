import React from 'react'
import lang from '../utils/languageConstants';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const languageKey = useSelector((store)=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
     <form className='w-1/2 bg-black grid grid-cols-12'>
      <input 
        type="text"
        placeholder={lang[languageKey].gptSearchPlaceholder}
        className='p-2 m-4 col-span-9'
      />
      <button className='px-4 py-2 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[languageKey].search}</button>
     </form>

    </div>
  )
}

export default GptSearchBar;