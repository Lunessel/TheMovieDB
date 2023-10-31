import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";


export const getPopularMovies = createAsyncThunk(
    'movieSlice/getPopularMovies',
    async (arg, {getState})=>{
        try {
            // const {currentPage} = movieSlice.getInitialState;
            // console.log(currentPage);
            const movies = await movieService.getPopular(arg.currentPage);
            return movies
        }catch (e){

        }
    }
)

export const getSearchedMovies = createAsyncThunk(
    'movieSlice/getPopularMovies',
async (arg, {getState})=>{
        try {
            const movies = await movieService.getSearched(arg.term, arg.currentPage);
            return movies
        }catch (e){

        }
    }
)


const movieSlice = createSlice( {
    name:'movieSlice',
    initialState: {
        movies:[],
        currentPage:1,
        term:'',
        total_pages:null,
        status: null,
        error: null
    },
    reducers:{
        ChangeTerm:(state, action) => {
            // console.log("changeterm: " + action.payload)
            state.term = action.payload;
            // console.log("term: " + state.term)
        },
        ChangePage:(state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [getPopularMovies.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [getPopularMovies.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.movies = action.payload['results']
            state.total_pages = action.payload['total_pages']
            // console.log(state.total_pages)
        },
        [getPopularMovies.rejected]: (state, action) =>{

        }
    }
})



const movieReducer = movieSlice.reducer
export const {ChangeTerm, ChangePage} = movieSlice.actions

export default movieReducer