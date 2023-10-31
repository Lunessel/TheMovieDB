import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";
import {useDispatch} from "react-redux";


export const getMovieById = createAsyncThunk(
    'oneMovieSlice/getMovieById',
    async (arg, {getState})=>{
        try {
            let movie = await movieService.getMovieById(arg.id);
            // movie = JSON.stringify(movie);
            return movie;
        }catch (e){

        }
    }
)





const oneMovieSlice = createSlice( {
    name:'oneMovieSlice',
    initialState: {
        movie: null,
        status: null,
        error: null
    },
    reducers: {
        // SetHeaders:(state, action) => {
        //     state.headers = action.payload;
        // }
    },
    extraReducers: {
        [getMovieById.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null

        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movie = action.payload.data


        },
        [getMovieById.rejected]: (state, action) => {

        },
    }
})

const onemovieReducer = oneMovieSlice.reducer

// export const {} = oneMovieSlice.actions
export default onemovieReducer

