import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";



import {getPopularMovies, getSearchedMovies} from "../../store";
import {Movie} from "../Movie/Movie";
import "./movies.css"

const Movies = () => {
    const {movies, term, status, error, currentPage} = useSelector(( state => state.movieReducer))
    const dispatch = useDispatch();
    useEffect(() => {
        if(term === "") {
            dispatch(getPopularMovies({currentPage}))

        }
        else {
            dispatch(getSearchedMovies({term, currentPage}))
        }

    }, [term, currentPage]);

    return (
        <div className='movies-grid'>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}

export {Movies}