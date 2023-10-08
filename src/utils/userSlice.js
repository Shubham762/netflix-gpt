import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:"user",
    initialState:"",
    reducers:{
       addUser:(state,action)=>{
          return action.payload;
       },
       removeUser:(state,action)=>{
        return null;
       }
    }

})
// console.log("this is usersilce",userSlice.reducer)
export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;