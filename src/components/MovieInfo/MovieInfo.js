import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovieById} from "../../store/onemovie.slice";
import "./movieinfo.css"


const MovieInfo = () => {
    const nullw500 = require('../../images/nullw500.png')

    const {id} = useParams();
    const {movie, status, error} = useSelector((state => state.onemovieReducer));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieById({id}))
    }, [dispatch, id]);
    console.log("MOVIE")
    console.log(movie)
    // const {poster_path, title, release_date, vote_average, runtime, genres, tagline, overview} = movie;
    return (
        <div className={"relative"}>
            {status==="pending"&&<div className={"loading"}>
                <h3>Loading...</h3>
            </div>}
            {status ==="fulfilled"&&<div className="movie-grid">
                <div className="movie-poster">
                    <img src={movie.poster_path ?
                        `https://image.tmdb.org/t/p/w500${movie.poster_path}` :
                        `${nullw500}`}
                         alt="Movie poster" />
                </div>
                <div className="infos-grid">
                    <div className="movie-title relative">
                        {movie.title}</div>
                    <div className="movie-infos">
                        <span className="movie-date">{movie.release_date}</span>
                        <span className="movie-vote">{movie.vote_average}</span>
                        <span className="movie-runtime">
                        {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                    </div>
                    <div className="movie-genres">
                        {movie.genres ? movie.genres.map(({id, name}, i) => <span key={id}>
                        {i !== movie.genres.length - 1 ? `${name}, ` :
                            ` ${name}`}
                        </span>) : null}
                    </div>
                    <div className="movie-tagline">{movie.tagline ?
                        movie.tagline : null}</div>

                    <div className="movie-overview">{movie.overview}</div>
                </div>





            </div>}

        </div>
    );
};

export default MovieInfo;

