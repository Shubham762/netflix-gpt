import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        tvShows:null,
        latestTvShows:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
             state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies=action.payload
        },
        addtopRatedMovies: (state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTvShows: (state,action)=>{
            state.tvShows=action.payload
        },
        addLatestTvShows: (state,action)=>{
            state.latestTvShows=action.payload
        }
    }
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addtopRatedMovies,addUpcomingMovies,addTvShows,addLatestTvShows}=movieSlice.actions;

export default movieSlice.reducer;