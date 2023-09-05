import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import {searchMovieById} from "../Api"

const MoviesDetails = () =>{
   const {movieId} = useParams()
  const [movie, setMovie] = useState({})
  console.log(movie)
   console.log(movieId)
   useEffect(()=>{
    searchMovieById(movieId).then(res => setMovie(res))
   },[movieId])
    return(
        <div>
            <p>This page is Movie's details</p>
            <ul>
                <li>
                    <Link to="cast"> Cast</Link>    
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>  
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MoviesDetails;