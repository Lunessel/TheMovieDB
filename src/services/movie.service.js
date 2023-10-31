import {axiosService} from "./axios.service";
import {urls} from "../constants";
export const movieService = {
    getPopular:(page) =>  axiosService.get(`${urls.popular}?api_key=9198b6fc805b499a5e6507a055496ac3&language=en-US&page=${page}`)
        .then(value => value.data),
    // getPopular:(page) => console.log(page),
    getSearched:(term, page) => axiosService.get(`${urls.search}?api_key=9198b6fc805b499a5e6507a055496ac3&language=en-US&query=${term}&page=${page}&include_adult=false`)
        .then((value =>value.data)),
    getMovieById:(id) => axiosService.get(`${urls.movie}/${id}?api_key=9198b6fc805b499a5e6507a055496ac3&language=en-US`)
}