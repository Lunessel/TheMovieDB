import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import "./movie.css"
const Movie = ({movie:{id, poster_path, release_date, original_title, vote_average}}) => {
    const dispatch = useDispatch();
    const nullw500 = require('../../images/nullw500.png')

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='movie-item infos-container'>
            <Link to={`/movie/${id}`} onClick={scrollTop}>
                <img src={poster_path ?
                    `https://image.tmdb.org/t/p/w500${poster_path}` :
                    `${nullw500}`}
                     alt={`Movie Poster`}/>
                <div className="infos-box">
                    <div className="infos-one">{release_date}</div>
                    <div className="infos-two">{original_title}</div>
                    <div className="infos-three">{vote_average}</div>
                </div>
            </Link>
        </div>
    );
}

export {Movie};
