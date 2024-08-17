import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice'

const appStore= configureStore({
    reducer:{  
      user: userReducer,
      movies:moviesReducer,
      gpt:gptReducer,
      config:configReducer
    },
    
})
// console.log("this is in=============>",userReducer)
export default appStore;
