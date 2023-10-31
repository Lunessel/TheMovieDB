import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import onemovieReducer from "./onemovie.slice";


const store = configureStore( {
    reducer: {
        movieReducer,
        onemovieReducer
    }
})

export  default  store