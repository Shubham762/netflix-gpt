import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './userSlice';

const appStore= configureStore({
    reducer:{  
      user: userReducer
    }
})
// console.log("this is in=============>",userReducer)
export default appStore;
