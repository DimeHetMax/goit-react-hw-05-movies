import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ba5375203309192f6e2367b509af4cd4';
axios.defaults.params = { api_key: API_KEY }
// "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'"

export const fetchedTrandingMovies = async () =>{
    try {
        const res = await axios.get("/trending/all/day?language=en-US")
        return res.data.results
    } catch (error) {
        console.log(error)
    }
}

export const searchMovies = async (movie, page) =>{
    try {
        const res = await axios.get(`/search/movie?query=${movie}&include_adult=false&language=en-US&page=${page}`)
    //    console.log(res)
    //    console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
// "https://api.themoviedb.org/3/movie/movie_id?language=en-US"
export const searchMovieById = async (id) =>{
    try {
        const res = await axios.get(`/movie/${id}?language=en-US`)
        return res.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('Movie not found.');
            return {poster_path:"/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
                    original_title:"No Info",
                    vote_average:0,
                    overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae laudantium soluta tempora modi molestiae magnam perferendis, est corrupti consequatur. Eaque.",
                    };
          } else {
            console.log(error);
            throw error;
          }
    }
}

// "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US"

export const searchMoviesCastById = async (id) =>{
    try {
        const res = await axios.get(`/movie/${id}/credits?language=en-US`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
// "https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1"

export const searchMoviesReviewsById = async (id) =>{
    try {
        const res = await axios.get(`/movie/${id}/reviews?language=en-US&page=1`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
